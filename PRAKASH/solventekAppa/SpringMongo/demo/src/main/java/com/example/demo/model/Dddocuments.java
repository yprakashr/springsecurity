package com.example.demo.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "dddocuments")
public class Dddocuments {

    @Id
    private long id;
    private long ddid;
    private String docname;
    private String docjson;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getDdid() {
        return ddid;
    }

    public void setDdid(Long ddid) {
        this.ddid = ddid;
    }

    public String getDocname() {
        return docname;
    }

    public void setDocname(String docname) {
        this.docname = docname;
    }

    public String getDocjson() {
        return docjson;
    }

    public void setDocjson(String docjson) {
        this.docjson = docjson;
    }

	public Dddocuments(Long id, Long ddid, String docname, String docjson) {
		super();
		this.id = id;
		this.ddid = ddid;
		this.docname = docname;
		this.docjson = docjson;
	}

	public Dddocuments() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Dddocuments [id=" + id + ", ddid=" + ddid + ", docname=" + docname + ", docjson=" + docjson + "]";
	}
    
    
}

