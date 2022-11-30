function  aumentarSalario(salarioBase){
    try {
        switch (true) {
            case salarioBase <= 1500:
                return salarioBase*1.2;

            case salarioBase > 1500 && salarioBase <= 2000:
                return salarioBase*1.15;

            case salarioBase > 2000 && salarioBase <= 3000:
                return salarioBase*1.1;

            case salarioBase > 3000:
                return salarioBase*1.05;
        
            default:
                throw new error();
        }
    } catch (error) {
        console.log("Dados incorretos, digite novamente!")
    }
}

aumentarSalario(1400);
aumentarSalario(1700);
aumentarSalario(2200);
aumentarSalario(3200);