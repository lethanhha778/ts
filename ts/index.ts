// let fullName = "le"
/**
 * Kiểu dữ liêu (type)
 */

const fullName: string = "Lê Văn";
let a: number = 12;

// a = "123";

let isLogin: boolean = true;
// isLogin = 'a'
let localStore: null = null;
let propertyName: undefined = undefined;

//Tham Chiếu: object, array, function
//? Object

/**
 * Class
 * type: định nghĩa kiểu dữ liệu
 */

type Employee = {
    ma: number,
    hoTen: string,
    luong: number,
    moTa?: string,  //? optional property
}

let nv: Employee = {
    ma: 1,
    hoTen: 'Abc',
    luong: 1234,
}

//Union Type: quy định nhiều kiểu dữ liệu cho 1 biến
type responBE = string | number | boolean | undefined

let result: responBE = 12;

/**
 * Interface gần giống type
 */

interface Product {
    id: number | string,
    name: string,
    price: number,
    img: string,

}

// gộp interface
// chỉ dùng để khai báo các thuộc tính optional
interface Product {
    moTa?: string,
}

let product: Product = { id: "1ba", name: 'Nguyen Van A', price: 1234, img: 'https://img12.cc/avata' }

//?Kế thừa interface 
interface Button {
    id: number | string,
    className: string,
    innerHTML: string
}
interface ButtonGradient extends Button {
    gradient: string
}

let btn: ButtonGradient = {
    id: "btn1",
    className: "BtnGradient",
    innerHTML: "Click",
    gradient: "color"
}

// Quy định kiểu dữ liệu cho Class
// CRUD
//any: ko có kiểu dữ liệu( điền dữ liệu nào cho biến cũng đc)
// unknown

interface CRUD {
    //phương thức
    // interface ko đc viết code chạy chức năng, chỉ khai báo tên thuộc tính, 
    //phương thức(phương thức ko chứa code thực thi, code thực thi chỉ đc chứa ở implements)
    // create (newItem: any):number {
    //     // code thực thi sẽ báo lỗi
    // },
    create: any,
    update: any,
    delete: any,
    read: any
}
//!implements
class Phim implements CRUD {
    // class implements thì mới chứa code xử lý
    // arow function chỉ dùng vs hàm bt, ko dùng vs implements
    create(newItem: any): number {
        return 123
    };
    update: any;
    delete: any;
    read: any;
}

//Type của function 
// let tinhTong = (num1, num2) => {
//     return num1 + num2
// }

//? có return dùng :kiểu return
let tinhTong = (num1: number, num2: number): number => {
    return num1 + num2
}
tinhTong(1, 5)
// console.log(tinhTong (1,5));

//? ko có return dùng void
let showInfo = (name: string): void => {
    console.log(`hello ${name}`);
}

// showInfo("Hà")


let main = (callback: (name: string) => void) => {
    // truyền giá trị name vào 1 hàm callback
    callback('Type');
}

let renderH1 = (name: string): void => {
    console.log(`Hello ${name}`);
}

main(renderH1)

//! kiểu của mảng
let arrNumber: number[] = [1, 2, 3, 5]
let arrString: string[] = ["a", "d", "e", "f"];


let arrayProduct: Product[] = [
    { id: 2, name: 'abc', price: 123, img: 'htps//avc.css/avt' },
    { id: 2, name: 'abc', price: 123, img: 'htps//avc.css/avt' }
];

//! tuple: dữ liệu mảng hỗn hợp

let sv: [number, string] = [1, 'sinh viên']


/**
 * Class 
 */

class ProductType {
    id: string = '';
    name: string = '';
    img: string = '';
    showInfo(): void {
        console.log(this.name)
    };
}

let product1 = new ProductType()
product1.id = "sp001";
product1.name = "a";
product1.showInfo()

//? any cho phép dùng các toán tử(+, -, *, /) và gọi hàm
// let product2:any = undefined;
// product2.showInfo();


let pro3: unknown = undefined;

// instanceof kiểm tra có phải là thể hiện của Class ko?
if (pro3 instanceof ProductType) {
    pro3.showInfo();
}

let prod4: unknown = undefined;
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
    public ma: number | string = '';
    ten: string = '';
    luongCB: number = 1000;
//    private luongCB: number = 1000;
    protected heSo: number = 1;
    tinhLuong(): number {
        return this.luongCB * this.heSo
    }
}

class NhanVienKeToan extends NhanVien {
    tinhLuong(): number {
        return this.luongCB * this.heSo
    }
}

let nv2 = new NhanVien()
nv2.ma = 123;
nv2.ten = 'ng van a';
nv2.luongCB = 5000;
// nv2.heSo = 3 // gọi ra bị lỗi
console.log(nv2.tinhLuong())

//Generic

// phim, người dùng

class List <T>{
    // truyền dữ liệu động
    data: T[]=[];

    create(newItem:any):void{
        this.data.push(newItem)
    }
    getById(id:any):any{
        return this.data.find((item:any)=>item.id == id)
    }

}

type User = {
    id: string,
    userName: string,
    password:string,
}

let userList = new List<User>();

let user:User ={id:"user1",userName: "abc",password:"cfd"}

userList.create(user)
console.log(userList)