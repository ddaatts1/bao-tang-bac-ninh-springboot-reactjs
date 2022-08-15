package com.baotangbacninh.baotang.model;

import com.baotangbacninh.baotang.Enum.Category;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PostsForm {

    String postsName;
    boolean publish;
    String postsSource;
    String postsTitle;
    String postsContent;
    Category postsCategory;


}
