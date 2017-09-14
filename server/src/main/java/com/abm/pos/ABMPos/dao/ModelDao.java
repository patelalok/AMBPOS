package com.abm.pos.ABMPos.dao;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.transaction.Transactional;

/**
 * Created by apatel2 on 5/16/17.
 */
@Entity
@Table(name = "model")
public class ModelDao {

    @Id
    private String name;
    private String description;

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
}
