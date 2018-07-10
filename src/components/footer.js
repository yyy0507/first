import React,{Component} from "react";

export default class Footer extends Component{
	render(){
		return(
				<ul className="footer-wraper">
					<li><span></span><span>筛选</span></li>
					<li><span></span><span>推荐排序</span></li>
					<li><span></span><span>时间</span></li>
					<li><span></span><span>价格</span></li>
				</ul>

		)
	}
}