package com.baotangbacninh.baotang.model;

import com.baotangbacninh.baotang.Enum.Category;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PostsDTO {

    int id;
    String postsName;
    boolean publish;
    String postsSource;
    String postsTitle;
    String postsContent;
    Category postsCategory;
    LocalDate date;
//    String[] imageList;
    List<Image> imageList;
    public PostsDTO(Posts posts){
        id = posts.getId();
        postsCategory=posts.getPostsCategory();
        postsContent=posts.getPostsContent();
        postsTitle=posts.getPostsTitle();
        date=posts.getDate();
        publish=posts.isPublish();
        postsSource=posts.getPostsSource();
        postsName=posts.getPostsName();
//        imageList = new String[posts.getImageList().size()];
//        AtomicInteger j= new AtomicInteger(0);
//        posts.getImageList().stream().forEach((i)->{
//            imageList[j.getAndIncrement()] = i.getImageName();
//        });
        imageList = new ArrayList<>();
        imageList = posts.getImageList();

    }
}
