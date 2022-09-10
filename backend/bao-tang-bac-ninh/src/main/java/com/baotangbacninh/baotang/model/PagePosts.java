package com.baotangbacninh.baotang.model;

import org.jetbrains.annotations.NotNull;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.function.Function;

public class PagePosts implements Page<PostsDTO>  {

    Page<Posts> PagePosts;
    List<PostsDTO> ListContent;

    public PagePosts(Page<Posts> posts){
        PagePosts = posts;
        ListContent = new ArrayList<>();
        PagePosts.getContent().stream().forEach((p)->{
            ListContent.add(new PostsDTO(p));
        });
    }
    @Override
    public int getTotalPages() {
        return PagePosts.getTotalPages();
    }

    @Override
    public long getTotalElements() {
        return PagePosts.getTotalElements();
    }

    @Override
    public int getNumber() {
        return PagePosts.getNumber();
    }

    @Override
    public int getSize() {
        return PagePosts.getSize();
    }

    @Override
    public int getNumberOfElements() {
        return PagePosts.getNumberOfElements();
    }

    @Override
    public List<PostsDTO> getContent() {
        return ListContent;
    }

    @Override
    public boolean hasContent() {
        return PagePosts.hasContent();
    }

    @Override
    public Sort getSort() {
        return PagePosts.getSort();
    }

    @Override
    public boolean isFirst() {
        return PagePosts.isFirst();
    }

    @Override
    public boolean isLast() {
        return PagePosts.isLast();
    }

    @Override
    public boolean hasNext() {
        return PagePosts.hasNext();
    }

    @Override
    public boolean hasPrevious() {
        return PagePosts.hasPrevious();
    }

    @Override
    public Pageable nextPageable() {
        return PagePosts.nextPageable();
    }

    @Override
    public Pageable previousPageable() {
        return PagePosts.previousPageable();
    }

    @Override
    public <U> Page<U> map(Function<? super PostsDTO, ? extends U> converter) {
        return null;
    }

    @NotNull
    @Override
    public Iterator<PostsDTO> iterator() {
        return getContent().iterator();
    }
}
