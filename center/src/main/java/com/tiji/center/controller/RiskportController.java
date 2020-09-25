package com.tiji.center.controller;

import com.tiji.center.pojo.Riskport;
import com.tiji.center.service.RiskportService;
import entity.PageResult;
import entity.Result;
import entity.StatusCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import util.IdWorker;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Map;
import java.util.Objects;

/**
 * riskport控制器层
 *
 * @author 贰拾壹
 */
@RestController
@CrossOrigin
@RequestMapping("/riskport")
public class RiskportController {

    @Autowired
    private RiskportService riskportService;
    @Autowired
    private IdWorker idWorker;

    /**
     * 查询全部数据
     *
     * @return
     */
    @RequestMapping(method = RequestMethod.GET)
    public Result findAll() {
        return new Result(true, StatusCode.OK, "查询成功", riskportService.findAll());
    }

    /**
     * 根据ID查询
     *
     * @param id ID
     * @return
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Result findById(@PathVariable String id) {
        return new Result(true, StatusCode.OK, "查询成功", riskportService.findById(id));
    }


    /**
     * 分页+多条件查询
     *
     * @param searchMap 查询条件封装
     * @param page      页码
     * @param size      页大小
     * @return 分页结果
     */
    @RequestMapping(value = "/search/{page}/{size}", method = RequestMethod.POST)
    public Result findSearch(@RequestBody Map searchMap, @PathVariable int page, @PathVariable int size) {
        Page<Riskport> pageList = riskportService.findSearch(searchMap, page, size);
        return new Result(true, StatusCode.OK, "查询成功", new PageResult<Riskport>(pageList.getTotalElements(), pageList.getContent()));
    }

    /**
     * 根据条件查询
     *
     * @param searchMap
     * @return
     */
    @RequestMapping(value = "/search", method = RequestMethod.POST)
    public Result findSearch(@RequestBody Map searchMap) {
        return new Result(true, StatusCode.OK, "查询成功", riskportService.findSearch(searchMap));
    }

    /**
     * 增加
     *
     * @param riskport
     */
    @RequestMapping(method = RequestMethod.POST)
    public Result add(@RequestBody Riskport riskport) {
        String port = riskport.getPort();
        Riskport riskportInDb = riskportService.findByPort(port);
        if (Objects.isNull(riskportInDb)) {
            riskportService.add(riskport);
            return new Result(true, StatusCode.OK, "增加成功");
        } else {
            return new Result(false, StatusCode.ERROR, "增加失败：端口重复");
        }
    }

    /**
     * 修改
     *
     * @param riskport
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Result update(@RequestBody Riskport riskport, @PathVariable String id) {
        riskport.setId(id);
        riskportService.update(riskport);
        return new Result(true, StatusCode.OK, "修改成功");
    }

    /**
     * 删除
     *
     * @param id
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public Result delete(@PathVariable String id) {
        riskportService.deleteById(id);
        return new Result(true, StatusCode.OK, "删除成功");
    }


    /**
     * 根据ids批量删除
     *
     * @param ids
     */
    @RequestMapping(value = "/deleteids", method = RequestMethod.POST)
    public Result deleteAllByIds(@RequestBody List<String> ids) {
        riskportService.deleteAllByIds(ids);
        return new Result(true, StatusCode.OK, "删除成功");
    }

    /**
     * 批量导入高危端口
     */
    @RequestMapping(value = "/batchAdd", method = RequestMethod.POST)
    public Result batchAdd(@RequestParam("file") MultipartFile file) {
        if (Objects.isNull(file) || file.getSize() == 0) {
            return new Result(false, StatusCode.ERROR, "文件为空");
        }
        long fileSize = file.getSize();
        if (fileSize / 1024 / 1024 > 3) {
            return new Result(false, StatusCode.ERROR, "文件大小不能超过 3M");
        }
        String fileContentType = file.getContentType();
        assert fileContentType != null;
        if (!"text/plain".equals(fileContentType)) {
            return new Result(false, StatusCode.ERROR, "文件只能是 txt 格式");
        }
        String fileOriginalFilename = file.getOriginalFilename();
        assert fileOriginalFilename != null;
        String suffix = fileOriginalFilename.substring(fileOriginalFilename.lastIndexOf(".") + 1);
        if (!"txt".equals(suffix)) {
            return new Result(false, StatusCode.ERROR, "文件只能是 txt 格式");
        }

        String line;
        try (BufferedReader bf = new BufferedReader(new InputStreamReader(file.getInputStream(), StandardCharsets.UTF_8))) {
            while ((line = bf.readLine()) != null) {
                Riskport riskport = riskportService.findByPort(line);
                if (Objects.isNull(riskport)) {
                    riskportService.add(new Riskport(idWorker.nextId() + "", line));
                }
            }
        } catch (IOException ignored) {
        }
        return new Result(true, StatusCode.OK, "高危端口已上传处理，请稍后查看");

    }

}
