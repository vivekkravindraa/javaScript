window.addEventListener('load',function(){
    var links = [
    {
        title: 'Website',
        url: 'http://www.dctacademy.com'
    },
    {
        title: 'Facebook',
        url: 'http://facebook.com/dctacademy.bangalore'
    },
    {
        title: 'GitHub',
        url: 'http://github.com/dctacademy'
    }];

    var appHandle = document.getElementById('app');

    var table = document.createElement('table');
    table.setAttribute('border','1');

    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');

    var tr = document.createElement('tr');
    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    var text1 = document.createTextNode('Title');
    var text2 = document.createTextNode('URL');

    for(var i = 0; i < links.length; i++) {
        var row = document.createElement('tr');
        tbody.appendChild(row);

        var td1 = document.createElement('td');
        var td2 = document.createElement('td');

        var tdText1 = document.createTextNode(links[i].title);
        var tdText2 = document.createTextNode(links[i].url);

        var a = document.createElement('a');
        a.setAttribute('href',links[i].url);
        a.appendChild(tdText2);

        td1.appendChild(tdText1);
        // td2.appendChild(tdText2);
        td2.appendChild(a);

        row.appendChild(td1);
        row.appendChild(td2);
    }

    th1.appendChild(text1)
    th2.appendChild(text2);

    tr.appendChild(th1);
    tr.appendChild(th2);

    thead.appendChild(tr);

    table.appendChild(thead);
    table.appendChild(tbody);
    appHandle.appendChild(table);

    console.log(appHandle);
},false);