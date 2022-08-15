package com.baotangbacninh.baotang.controller;

import com.baotangbacninh.baotang.Enum.Category;
import com.baotangbacninh.baotang.model.Posts;
import com.baotangbacninh.baotang.model.PostsForm;
import com.baotangbacninh.baotang.service.ImageService;
import com.baotangbacninh.baotang.service.PostsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;

import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.util.Arrays;

@RestController
@RequestMapping("/adminn")
@CrossOrigin
public class AdminController {
    @Autowired
    PostsService postsService;
    @Value("${file.path}")
    String path;

    @Autowired
    ImageService imageService;

    @GetMapping("/show")
    public ResponseEntity<Page<Posts>> show(@RequestParam Category category,
                                     @RequestParam(required = false, defaultValue = "1") int page) {
        Page<Posts> list = postsService.getTin(category, page == 0 ? 0 : page - 1);

        return ResponseEntity.ok(list);
    }

    @PostMapping("/add")
    public ResponseEntity<String> upload(@RequestParam( name = "File" ,required = false) MultipartFile[] multipartFile,
                                         @RequestParam(defaultValue = " ") String postsName,
                                         @RequestParam(defaultValue = " ") String postsTitle,
                                         @RequestParam(defaultValue = " ") String postsSource,
                                         @RequestParam(defaultValue = " ") String postsContent,
                                         @RequestParam(defaultValue = "true") boolean publish,
                                         @RequestParam(defaultValue = " ") String category
                                         ){

        if(multipartFile != null)
        Arrays.stream(multipartFile).forEach((multipartFile1 -> {
            System.out.println(multipartFile1.getOriginalFilename());
                    try {
            FileCopyUtils.copy(multipartFile1.getBytes(), new File(path + multipartFile1.getOriginalFilename()));
        } catch (IOException e) {
            e.printStackTrace();
        }
        }));
        System.out.println("----------------------upload");
        System.out.println("post name: "+postsName);
        System.out.println("post title: "+postsTitle);
        System.out.println("post source: "+postsSource);
        System.out.println("publish: "+publish);
        System.out.println("category: "+category);
        System.out.println("cnotent: "+postsContent);

        Posts newPosts = new Posts(postsName,publish,postsSource,postsTitle,postsContent,Category.valueOf(category));
        newPosts.setDate(LocalDate.now());
        postsService.addPosts(newPosts);

        //add images
        if (multipartFile != null) {
            int postsId = postsService.getPostsByName(newPosts.getPostsName()).getId();
            Arrays.stream(multipartFile).forEach(i -> {
                imageService.addImage(postsId, i.getOriginalFilename());
                try {
                    FileCopyUtils.copy(i.getBytes(), new File(path + i.getOriginalFilename()));
                } catch (IOException e) {
                    e.printStackTrace();
                }
            });
        }

        return ResponseEntity.ok("thanh cong");
    }


}


