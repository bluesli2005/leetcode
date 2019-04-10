var isValid = function(s) {
    let right = [];
    for (let i = 0; i < s.length; i++) {
        if(s[i] == "("){
            right.push(")");
        }else if(s[i] == "{"){
            right.push("}");
        }else if(s[i] == "["){
            right.push("]");
        }else if(right.pop() != s[i] ){
            return false;
        }
    }
    return !right.length;
};
