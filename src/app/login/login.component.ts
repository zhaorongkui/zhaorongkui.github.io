import { Component, OnInit } from "@angular/core";
// 1. 引入forms中的组件
import { FormGroup, FormControl } from "@angular/forms";
// 2. 引入ng2-validation中的组件
import { CustomValidators } from "ng2-validation";
import { HttpClient } from "@angular/common/http"//这里是HttpClient

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public anyList: any
  ngOnInit() {
    this.http.get("https://api.example.com/api/list")
      .subscribe(res => { this.anyList = res })
      console.log(this.anyList);
  }
  // 3. 定义表单组
  form: FormGroup;
  constructor(private http: HttpClient) {
    let aa = '/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/';
    // 4. 初始化表达组里面的内容
    this.form = new FormGroup({
      // 定义form.field 是一个区间
      field: new FormControl('', CustomValidators.range([2, 9])),
      // 定义form.num 是数字类型
      num: new FormControl('', CustomValidators.number),
      username: new FormControl('', CustomValidators.range([2, 9])),
      password: new FormControl('', CustomValidators.range([6, 12])),
      email: new FormControl('', CustomValidators.email),
    });
  }
}
