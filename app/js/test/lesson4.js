{
    console.log('a', `\u0061`); // 返回 a
    console.log('s', `\u20BB7`); // 返回₻7
    console.log('s', `\u{20BB7}`); // 返回𠮷
}


{
    // es5
    let s = '𠮷a';
    console.log('length', s.length); // 返回3，𠮷使用了2个字节来存储,a使用了一个字节存储
    console.log('0', s.charAt(0)); // 返回 �
    console.log('1', s.charAt(1)); // 返回 �
    console.log('2', s.charAt(2)); // 返回 a
    console.log('at0', s.charCodeAt(0)); // 返回55362
    console.log('at1', s.charCodeAt(1)); // 返回57271
    console.log('at2', s.charCodeAt(2)); // 返回97

    // es6
    let s1 = '𠮷a';
    console.log('length', s1.length); // 返回3 ，𠮷使用了2个字节来存储,a使用了一个字节存储
    console.log('code0', s1.codePointAt(0)); // 返回 134071
    console.log('code0', s1.codePointAt(0).toString(16)); // 返回20bb7，转成了16进制
    console.log('code1', s1.codePointAt(1)); // 返回 57271
    console.log('code2', s1.codePointAt(2)); // 返回 97
}

{
    let s = '012345';
    //第二个参数代表开始位置
    console.log(s.startsWith('1', 6)); // true
    console.log(s.endsWith('2', 5)); // true
    console.log(s.includes('3', 6)); // false
}

{
    console.log(String.fromCharCode("0x20bb7"));
    console.log(String.fromCodePoint("0x20bb7"));
}

{
    let str = '\u{20bb7}abc';
    for (let i = 0; i < str.length; i++) {
        console.log('es5', str[i]);
    }
    for (let code of str) {
        console.log('es6', code);
    }
}

{
    let str = "string";
    console.log('includes', str.includes("c"));
    console.log('start', str.startsWith('str'));
    console.log('end', str.endsWith('ng'));
}

{
    let str = "abc";
    console.log(str.repeat(2));
}

{
    let name = "list";
    let info = "hello world";
    let m = `i am ${name},${info}`;
    console.log(m);
}

{
    console.log('1'.padStart(2, '0'));
    console.log('1'.padEnd(2, '0'));
}

{
    let user = {
        name: 'list',
        info: 'hello world'
    };
    console.log(abc `i am ${user.name},${user.info}`);

    function abc(s, v1, v2) {
        console.log(s, v1, v2);
        return s + v1 + v2;
    }
}

{
    console.log(String.raw `Hi\n${1 + 2}`);
    console.log(`Hi\n${1 + 2}`);
}

{
    const tmpl = function (addrs) {
        `<table>
            // 这是第一重解析
            ${addrs.map(function (addr) {
                    // 这是第二重解析
                    `
                    <tr><td>${addr.first}</td></tr>
                    <tr><td>${addr.last}</td></tr>
                    `.join('');
                }) 
            }
        </table>`;
    };
}