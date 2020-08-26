export class Post{
	public id:number;
	public loveIts: number;
	 public create_at: string;
	constructor(
		public title: string,
	  	public content: string,
	  	create?:string, love?:number, id ?:number
		){
		love?this.loveIts=love:0;
		create?this.create_at=create: Date.now().toString();;
		if(id)
			this.id=id;
	}
}