package com.baotangbacninh.baotang.model;

import com.baotangbacninh.baotang.Enum.Category;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@Table(name = "posts")
@AllArgsConstructor
@NoArgsConstructor
public class Posts {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    @Column(name = "posts_name")
    @NotBlank(message = "Tên bài không được để trống!")
    String postsName;
    @Column(name = "publish")
    boolean publish;
    @Column(name = "posts_source")
    String postsSource;
    @NotBlank
    @Column(name = "posts_title")
    String postsTitle;
    @Column(name = "posts_content")
    @NotBlank
    String postsContent;
    @Column(name = "posts_category")
    Category postsCategory;
    @Column(name = "date")
    LocalDate date;
    @JsonIgnore
    @OneToMany(mappedBy = "posts",fetch = FetchType.EAGER)
    List<Image> imageList;


public Posts(String pn,boolean pl,String ps,String pt,String pc,Category c){
    postsName =pn;
    publish=pl;
    postsCategory=c;
    postsContent=pc;
    postsTitle=pt;
    postsSource=ps;

}

public Posts(Category category){
    this.postsCategory=category;
}

    public String getPostsImage(){
        return"assds";
    }
}
