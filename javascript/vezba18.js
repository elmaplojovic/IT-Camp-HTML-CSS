class Car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    age(){
        let date =new Date();
        return date.getFullYear() - this.year;
    }
}

c1=new Car("Mercedes",2010);
c2=new Car("Audi",2020);
console.log(c1.age());
console.log(c2.age();)