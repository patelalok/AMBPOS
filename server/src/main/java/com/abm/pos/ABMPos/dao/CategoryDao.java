package com.abm.pos.ABMPos.dao;

import javax.persistence.*;
import java.util.Set;

/**
 * Created by apatel2 on 5/16/17.
 */

@Entity
@Table(name = "category")
public class CategoryDao {

    @Id
    private String name;
    private String description;

    @Transient
    private int noOfProducts;

    @OneToMany
    @JoinColumn(name="categoryName")
    private Set<ProductDao> productDaoSet;

    public Set<ProductDao> getProductDaoSet() {
        return productDaoSet;
    }

    public void setProductDaoSet(Set<ProductDao> productDaoSet) {
        this.productDaoSet = productDaoSet;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getNoOfProducts() {
        return noOfProducts;
    }

    public void setNoOfProducts(int noOfProducts) {
        this.noOfProducts = noOfProducts;
    }

}
