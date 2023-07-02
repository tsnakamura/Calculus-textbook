class Chapter{
	constructor(chapter){
		this.chapter = chapter;
		this.ncode = 0;
		this.nex = 0;
		this.ref_nums = {};
		this.exref_nums = {};
	}
    codeNumber(name){
        var cnum = "Code "+ this.chapter.toString() +"."+ (++this.ncode).toString();
		var str = '<a name="'+name+'" style="font-weight:bold; background-color: #F5F5F5">' + cnum + '</a>';
        document.write(str);
        this.ref_nums[name] = cnum;
    }
    codeRef(name){
        var str = '<a href="#' + name + '">'+ this.ref_nums[name] +'</a>';
        document.write(str);
    }
	exNumber(name){
        var exnum = "Ex. "+ this.chapter.toString() +"."+ (++this.nex).toString();
		var str = '<a name="'+name+'" style="font-weight:bold; background-color: #F5F5F5">' + exnum + '</a>';
        document.write(str);
        this.exref_nums[name] = exnum;
    }
    exRef(name){
        var str = '<a href="#' + name + '">'+ this.exref_nums[name] +'</a>';
        document.write(str);
    }
}