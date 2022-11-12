// let fullName = "le"
/**
 * Kiểu dữ liêu (type)
 */
const fullName = "Lê Văn";
let a = 12;
// a = "123";
let isLogin = true;
// isLogin = 'a'
let localStore = null;
let propertyName = undefined;
let nv = {
    ma: 1,
    hoTen: 'Abc',
    luong: 1234,
};
let result = 12;
let product = { id: "1ba", name: 'Nguyen Van A', price: 1234, img: 'https://img12.cc/avata' };
let btn = {
    id: "btn1",
    className: "BtnGradient",
    innerHTML: "Click",
    gradient: "color"
};
//!implements
class Phim {
    // class implements thì mới chứa code xử lý
    // arow function chỉ dùng vs hàm bt, ko dùng vs implements
    create(newItem) {
        return 123;
    }
    ;
}
//Type của function 
// let tinhTong = (num1, num2) => {
//     return num1 + num2
// }
//? có return dùng :kiểu return
let tinhTong = (num1, num2) => {
    return num1 + num2;
};
tinhTong(1, 5);
// console.log(tinhTong (1,5));
//? ko có return dùng void
let showInfo = (name) => {
    console.log(`hello ${name}`);
};
// showInfo("Hà")
let main = (callback) => {
    // truyền giá trị name vào 1 hàm callback
    callback('Type');
};
let renderH1 = (name) => {
    console.log(`Hello ${name}`);
};
main(renderH1);
//! kiểu của mảng
let arrNumber = [1, 2, 3, 5];
let arrString = ["a", "d", "e", "f"];
let arrayProduct = [
    { id: 2, name: 'abc', price: 123, img: 'htps//avc.css/avt' },
    { id: 2, name: 'abc', price: 123, img: 'htps//avc.css/avt' }
];
//! tuple: dữ liệu mảng hỗn hợp
let sv = [1, 'sinh viên'];
/**
 * Class
 */
class ProductType {
    constructor() {
        this.id = '';
        this.name = '';
        this.img = '';
    }
    showInfo() {
        console.log(this.name);
    }
    ;
}
let product1 = new ProductType();
product1.id = "sp001";
product1.name = "a";
product1.showInfo();
//? any cho phép dùng các toán tử(+, -, *, /) và gọi hàm
// let product2:any = undefined;
// product2.showInfo();
let pro3 = undefined;
// instanceof kiểm tra có phải là thể hiện của Class ko?
if (pro3 instanceof ProductType) {
    pro3.showInfo();
}
let prod4 = undefined;
// typeof kiểm tra kiễu dữ liệu
if (typeof prod4 == 'number') {
    prod4++;
}
/**
 * access modifier:
 * !+ public: có thể truy cập gọi ra xài ở mọi nơi(instance, kế thừa, trong Class đó)
 * !+ private: chỉ dùng đc trong class đó (ko dùng đc instance, kế thừa);
 * !+ protected: chỉ dùng đc trong class đó và các lớp con kế thừa(ko dùng đc instance)
 */
class NhanVien {
    constructor() {
        this.ma = '';
        this.ten = '';
        this.luongCB = 1000;
        //    private luongCB: number = 1000;
        this.heSo = 1;
    }
    tinhLuong() {
        return this.luongCB * this.heSo;
    }
}
class NhanVienKeToan extends NhanVien {
    tinhLuong() {
        return this.luongCB * this.heSo;
    }
}
let nv2 = new NhanVien();
nv2.ma = 123;
nv2.ten = 'ng van a';
nv2.luongCB = 5000;
// nv2.heSo = 3 // gọi ra bị lỗi
console.log(nv2.tinhLuong());
//Generic
// phim, người dùng
class List {
    constructor() {
        // truyền dữ liệu động
        this.data = [];
    }
    create(newItem) {
        this.data.push(newItem);
    }
    getById(id) {
        return this.data.find((item) => item.id == id);
    }
}
let userList = new List();
let user = { id: "user1", userName: "abc", password: "cfd" };
userList.create(user);
