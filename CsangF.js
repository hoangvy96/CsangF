function xuly(){
    //buoc 1: lay du lieu tu mot phan tu co id la gi do?
    var c = document.getElementById('do C').value;
    
    console.log('do C:' +c  );
    //buoc 2: tinh toan, xu ly va kiem tra ket qua
    var tong = (9 * parseInt(c))/5 + 32
    document.getElementById('ketqua').innerHTML = 'do F:'+tong;
}