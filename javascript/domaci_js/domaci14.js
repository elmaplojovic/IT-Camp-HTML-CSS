class Book{
    constructor(title="",genre,author){
        this.title=title;
        this.genre=genre;
        this.author=author;
        this.read=false;
        this.read_date=null;
    }
}

class BookList{
    constructor(){
        this.bookShelf=[];
        this.booksRead=0;
        this.notBooksRead=this.bookShelf.length-this.booksRead;
        this.nextBook=null;
        this.currBook=null;
        this.lastBook=null;
        
    }

    add(book){
        if(book instanceof Book){
            this.bookShelf.push(book)

            for (let i = 0; i < this.bookShelf.length; i++) {
                if(!this.bookShelf[i].read){
                    this.currBook=this.bookShelf[i];
                    if(this.bookShelf[i+1]){
                        this.nextBook=this.bookShelf[i+2]
                    }else{
                        this.nextBook=null;
                    }
                
                  break;  
                }
            }
        }else{
            console.log("invalid argument type")
        }
    }
    finishCurrentBook(){
        for (let i = 0; i < this.bookShelf.length; i++) {
            const book = this.bookShelf[i];
            if(book.title === this.currBook.title){
                this.bookShelf[i].read=true;
                this.bookShelf[i].read_date=new Date().now();
                this.lastBook=this.currBook;
                this.currBook=this.nextBook;
                if(this.bookShelf[i+1]){
                    this.nextBook=this.bookShelf[i+1]
                }
                break;
            }
            
        }
    }
}


b1=new Book("HP","scifi","JKR")
b2=new Book("HP2","scifi","JKR")
b3=new Book("HP3","scifi","JKR")
b4=new Book("HP4","scifi","JKR")

bl=new BookList()

bl.add(b1)
bl.add(b2)
bl.add(b3)
bl.add(b4)


