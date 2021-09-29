export default (context, inject) => {
    const format = () => {
        const date = formatDate;
        const phone = formatPhone;
        const money = formatMoney
        return{
            date,
            phone,
            money
        }
    };
    inject('format', format);
    // For Nuxt <= 2.12, also add 👇
    context.$format = format;
}

function formatDate(datetime, type='full'){
    if(!!datetime){
        let date = type=="full" || type=="date"?datetime.substring(0,10).split("-").reverse().join("/"):"";
        let hour = type=="full" || type=="hour"?datetime.substring(11,16):"";
        return `${date} ${hour}`.trim();
    }else{
        return datetime;
    }
}

function formatPhone(phone){
    if (!!phone && (phone.length == 10 || phone.length == 11 || phone.length == 13)) {
        let mask = "";
        if (phone.length == 11) {
            mask = "(##) #####-####";
        } else if(phone.length==10) {
            mask = "(##) ####-####";
        }else{
            mask = "+## (##) #####-####";
        }
        phone = phone.split("");
        phone.forEach(item => {
            mask = mask.replace("#", item);
        });
        return mask;
    } else {
        return phone
    }
}

function formatMoney(value, decimal=2){
    let venda = value;
    if(valor==null){
        venda = 0;
    }
    if (!!venda && venda.toString().includes(",")) {
        venda = venda.toString().replace(",", ".");
    }
    return parseFloat(venda)
        .toFixed(decimal)
        .replace(".", ",")
        .replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
}