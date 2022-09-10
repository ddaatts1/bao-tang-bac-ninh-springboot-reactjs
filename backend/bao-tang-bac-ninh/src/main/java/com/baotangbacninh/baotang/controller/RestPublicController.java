package com.baotangbacninh.baotang.controller;

import com.baotangbacninh.baotang.Enum.Category;
import com.baotangbacninh.baotang.model.Image;
import com.baotangbacninh.baotang.model.PagePosts;
import com.baotangbacninh.baotang.model.Posts;
import com.baotangbacninh.baotang.model.PostsDTO;
import com.baotangbacninh.baotang.service.PostsService;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@RestController
@CrossOrigin
@RequestMapping("/api/public")
public class RestPublicController {

    @Autowired
    PostsService postsService;

    @GetMapping("{category}")
    public ResponseEntity<Page<PostsDTO>> show(@PathVariable String category,
                                                @RequestParam int page) {
        Page<Posts> list = postsService.getTin(Category.valueOf(category), page - 1);
        Page<PostsDTO>  page1=new PagePosts(list);

return ResponseEntity.ok(page1);

    }

    @GetMapping("posts/{id}")
    public ResponseEntity<Posts> getPostsById(@PathVariable Integer id){

        Optional<Posts> posts = postsService.findById(id);
        if(posts.isEmpty()){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(posts.get());

    }


}
