function VerificaIP (ip1, ip2, ip3, ip4)
{
	if (ip1=="" || ip1<1 || ip1 > 223)
	{	
		alert("Preencha o campo ip corretamente.");
		form.ip1.focus();
		return false;
	}
	
	if (ip2=="" || ip2<0 || ip2 > 255)
	{	
		alert("Preencha o campo ip corretamente.");
		form.ip2.focus();
		return false;
	}
	
	if (ip3=="" || ip3<0 || ip3 > 255)
	{	
		alert("Preencha o campo ip corretamente.");
		form.ip3.focus();
		return false;
	}
	
	if (ip4=="" || ip4<0 || ip4 > 255)
	{	
		alert("Preencha o campo ip corretamente.");
		form.ip4.focus();
		return false;
	}
	else return true;
}

function Nos (nos, ip1)
{
	var i, ajuda, auxnos;
	i = 0;
	if (ip1 > 0 && ip1 < 127 && nos >  16777216)
	{
		alert("Não é possível com tantas nos.");
		form.nos.focus();
		return false;
	}
	if (ip1 > 127 && ip1 < 192 && nos > 65536)
	{
		alert("Não é possível com tantas nos.");
		form.nos.focus();
		return false;
	}
	if (ip1 > 191 && ip1 < 224 && nos>  256)
	{
		alert("Não é possível com tantas nos.");
		form.nos.focus();
		return false;
	}else
	do{
		ajuda = Math.pow (2,(i));
		if (nos <= ajuda ) 
		{
		   auxnos = ajuda;
		}
		i++;
     }while (ajuda != auxnos) ;
    return auxnos;
}


function Redes (subredes, ip1)
{
	var ajuda, i , auxsubredes;
	 i = 0;
	 if (ip1 > 0 && ip1 < 127 && subredes >  4194304)
	{
		alert("Não é possível com tantas subredes.");
		form.subredes.focus();
		return false;
	}
	if (ip1 > 127 && ip1 < 192 && subredes >  16384)
	{
		alert("Não é possível com tantas subredes.");
		form.subredes.focus();
		return false;
	}
	if (ip1 > 191 && ip1 < 224 && subredes >  64)
	{
		alert("Não é possível com tantas subredes.");
		form.subredes.focus();
		return false;
	}else
     do{
		ajuda = Math.pow (2,(i));
		if (subredes <= ajuda ) 
		{
		   auxsubredes = ajuda;
		}
        i++;
	}while (ajuda != auxsubredes) ;
     
    return auxsubredes; 
}


function BitsRedes (subredes)
{
	var bitsrede;
    bitsrede = 0;
    while (subredes != 1)
    {
    	subredes = parseInt(subredes) / 2;
        bitsrede = parseInt(bitsrede) + 1;      
    }
    return bitsrede;
}


function Mascara (auxbitsrede)
 {
    var masc, i;
    masc = 0;
    if (auxbitsrede <= 8)
    {
        for (i=0; i<=(parseInt(auxbitsrede)-1); i++)
        {
            masc = masc + Math.pow (2,(7-i));
        }
    }
    if (auxbitsrede >=9 && auxbitsrede <=16)
    {
        for (i=0; i<=(parseInt(auxbitsrede)-9); i++)
        {
            masc = masc + Math.pow (2,(7-i));
        }                      
                    
    }
    if (auxbitsrede >=17 && auxbitsrede <=22 )
    {
    	for (i=0; i<=(parseInt(auxbitsrede)-17); i++)
        {
        	masc = masc + Math.pow (2,(7-i));
        }
                     
    }
    return masc;
}


function CalcSubredes()
{
	
 var classe = document.IPV4sr.classe.value;
 var ip1 = document.IPV4sr.ip1.value;
 var ip2 = document.IPV4sr.ip2.value;
 var ip3 = document.IPV4sr.ip3.value;
 var ip4 = document.IPV4sr.ip4.value;
 var ensubredes = document.IPV4sr.ensubredes.value;
 var subredes = document.IPV4sr.subredes.value;
 var nos = document.IPV4sr.nos.value;
 var bitsrede = document.IPV4sr.bitsrede.value;
 var bitsmasc = document.IPV4sr.bitsmasc.value;
 
 var verifica;
 verifica = VerificaIP(ip1,ip2,ip3,ip4);
 if (verifica == true)
 {
 subredes = Redes(ensubredes,ip1);
 bitsrede = BitsRedes(subredes);
 masc = Mascara(bitsrede);
 
	if (ip1 > 0 && ip1 < 127)
	{
		nos =  16777216/parseInt(subredes);
		bitsmasc = parseInt(bitsrede) + 8;
		document.IPV4sr.classe.value = 'A';
		document.IPV4sr.subredes.value = subredes;
		document.IPV4sr.nos.value = nos; 
		document.IPV4sr.bitsrede.value = bitsrede;
		document.IPV4sr.bitsmasc.value = bitsmasc;
		if (bitsrede < 9)
        	{
				document.IPV4sr.masc1.value = 255;
				document.IPV4sr.masc2.value = masc;
				document.IPV4sr.masc3.value = 0;
				document.IPV4sr.masc4.value = 0;
        	}
        	if (bitsrede > 8 && bitsrede < 17)
        	{ 
        		document.IPV4sr.masc1.value = 255;
				document.IPV4sr.masc2.value = 255;
				document.IPV4sr.masc3.value = masc;
				document.IPV4sr.masc4.value = 0;
        	}
        	if (bitsrede > 16 && bitsrede < 23 )
         	{  
				document.IPV4sr.masc1.value = 255;
				document.IPV4sr.masc2.value = 255;
				document.IPV4sr.masc3.value = 255;
				document.IPV4sr.masc4.value = masc;        
         	}
	}
	
	
	if (ip1 > 127 && ip1 < 192)
	{
		nos =  65536/parseInt(subredes);
		bitsmasc = parseInt(bitsrede) + 16;
		document.IPV4sr.classe.value = 'B';
		document.IPV4sr.subredes.value = subredes;
		document.IPV4sr.nos.value = nos; 
		document.IPV4sr.bitsrede.value = bitsrede;
		document.IPV4sr.bitsmasc.value = bitsmasc;
        	if (bitsrede < 9)
        	{ 
        		document.IPV4sr.masc1.value = 255;
				document.IPV4sr.masc2.value = 255;
				document.IPV4sr.masc3.value = masc;
				document.IPV4sr.masc4.value = 0;
        	}
        	if (bitsrede > 8 && bitsrede < 17 )
         	{  
				document.IPV4sr.masc1.value = 255;
				document.IPV4sr.masc2.value = 255;
				document.IPV4sr.masc3.value = 255;
				document.IPV4sr.masc4.value = masc;        
         	}
	}
	
	if (ip1 > 191 && ip1 < 224)
	{
		nos =  256/parseInt(subredes);
		bitsmasc = parseInt(bitsrede) + 24;
		document.IPV4sr.classe.value = 'C';
		document.IPV4sr.subredes.value = subredes;
		document.IPV4sr.nos.value = nos; 
		document.IPV4sr.bitsrede.value = bitsrede;
		document.IPV4sr.bitsmasc.value = bitsmasc;
        	
        	if (bitsrede <9)
         	{  
				document.IPV4sr.masc1.value = 255;
				document.IPV4sr.masc2.value = 255;
				document.IPV4sr.masc3.value = 255;
				document.IPV4sr.masc4.value = masc;        
         	}
	}
}	
}


function CalcNos()
{
	
 var classe = document.IPV4n.classe.value;
 var ip1 = document.IPV4n.ip1.value;
 var ip2 = document.IPV4n.ip2.value;
 var ip3 = document.IPV4n.ip3.value;
 var ip4 = document.IPV4n.ip4.value;
 var ennos = document.IPV4n.ennos.value;
 var subredes = document.IPV4n.subredes.value;
 var nos = document.IPV4n.nos.value;
 var bitsrede = document.IPV4n.bitsrede.value;
 var bitsmasc = document.IPV4n.bitsmasc.value;
  var verifica;
 verifica = VerificaIP(ip1,ip2,ip3,ip4);
 if (verifica == true)
 {
 nos = Nos(ennos,ip1);
 
	if (ip1 > 0 && ip1 < 127)
	{
		subredes =  16777216/parseInt(nos);
		bitsrede = BitsRedes(subredes);
		masc = Mascara(bitsrede);
		bitsmasc = parseInt(bitsrede) + 8;
		document.IPV4n.classe.value = 'A';
		document.IPV4n.subredes.value = subredes;
		document.IPV4n.nos.value = nos; 
		document.IPV4n.bitsrede.value = bitsrede;
		document.IPV4n.bitsmasc.value = bitsmasc;
		if (bitsrede < 9)
        	{
				document.IPV4n.masc1.value = 255;
				document.IPV4n.masc2.value = masc;
				document.IPV4n.masc3.value = 0;
				document.IPV4n.masc4.value = 0;
        	}
        	if (bitsrede > 8 && bitsrede < 17)
        	{ 
        		document.IPV4n.masc1.value = 255;
				document.IPV4n.masc2.value = 255;
				document.IPV4n.masc3.value = masc;
				document.IPV4n.masc4.value = 0;
        	}
        	if (bitsrede > 16 && bitsrede < 23 )
         	{  
				document.IPV4n.masc1.value = 255;
				document.IPV4n.masc2.value = 255;
				document.IPV4n.masc3.value = 255;
				document.IPV4n.masc4.value = masc;        
         	}
	}
	
	
	if (ip1 > 127 && ip1 < 192)
	{
		subredes =  65536/parseInt(nos);
		bitsrede = BitsRedes(subredes);
		masc = Mascara(bitsrede);
		bitsmasc = parseInt(bitsrede) + 16;
		document.IPV4n.classe.value = 'B';
		document.IPV4n.subredes.value = subredes;
		document.IPV4n.nos.value = nos; 
		document.IPV4n.bitsrede.value = bitsrede;
		document.IPV4n.bitsmasc.value = bitsmasc;
        	if (bitsrede < 9)
        	{ 
        		document.IPV4n.masc1.value = 255;
				document.IPV4n.masc2.value = 255;
				document.IPV4n.masc3.value = masc;
				document.IPV4n.masc4.value = 0;
        	}
        	if (bitsrede > 8 && bitsrede < 17 )
         	{  
				document.IPV4n.masc1.value = 255;
				document.IPV4n.masc2.value = 255;
				document.IPV4n.masc3.value = 255;
				document.IPV4n.masc4.value = masc;        
         	}
	}
	
	if (ip1 > 191 && ip1 < 224)
	{
		subredes =  256/parseInt(nos);
		bitsrede = BitsRedes(subredes);
		masc = Mascara(bitsrede);
		bitsmasc = parseInt(bitsrede) + 24;
		document.IPV4n.classe.value = 'C';
		document.IPV4n.subredes.value = subredes;
		document.IPV4n.nos.value = nos; 
		document.IPV4n.bitsrede.value = bitsrede;
		document.IPV4n.bitsmasc.value = bitsmasc;
        	
        	if (bitsrede <9)
         	{  
				document.IPV4n.masc1.value = 255;
				document.IPV4n.masc2.value = 255;
				document.IPV4n.masc3.value = 255;
				document.IPV4n.masc4.value = masc;        
         	}
	}
}	
}


function CalcBitsM()
{
	
 var classe = document.IPV4bm.classe.value;
 var ip1 = document.IPV4bm.ip1.value;
 var ip2 = document.IPV4bm.ip2.value;
 var ip3 = document.IPV4bm.ip3.value;
 var ip4 = document.IPV4bm.ip4.value;
 var enbitsmasc = document.IPV4bm.enbitsmasc.value;
 var subredes = document.IPV4bm.subredes.value;
 var nos = document.IPV4bm.nos.value;
 var bitsrede = document.IPV4bm.bitsrede.value;
 var bitsmasc = document.IPV4bm.bitsmasc.value;
 var verifica;
 
 verifica = VerificaIP(ip1,ip2,ip3,ip4);
 if (verifica == true)
 {
	bitsmasc = enbitsmasc;
	
	if (ip1 > 0 && ip1 < 127)
	{
	  if (bitsmasc < 8 || bitsmasc > 30)
	  {
		alert("Não compativel número de bits da mascara.");
		form.bitsmasc.focus();
		return false;
	  }else
		bitsrede = parseInt(bitsmasc) - 8;
		subredes = Math.pow(2,bitsrede);
        nos = (16777216 / parseInt(subredes));
		masc = Mascara(bitsrede);
		document.IPV4bm.classe.value = 'A';
		document.IPV4bm.subredes.value = subredes;
		document.IPV4bm.nos.value = nos; 
		document.IPV4bm.bitsrede.value = bitsrede;
		document.IPV4bm.bitsmasc.value = bitsmasc;
		if (bitsrede < 9)
        	{
				document.IPV4bm.masc1.value = 255;
				document.IPV4bm.masc2.value = masc;
				document.IPV4bm.masc3.value = 0;
				document.IPV4bm.masc4.value = 0;
        	}
        	if (bitsrede > 8 && bitsrede < 17)
        	{ 
        		document.IPV4bm.masc1.value = 255;
				document.IPV4bm.masc2.value = 255;
				document.IPV4bm.masc3.value = masc;
				document.IPV4bm.masc4.value = 0;
        	}
        	if (bitsrede > 16 && bitsrede < 23 )
         	{  
				document.IPV4bm.masc1.value = 255;
				document.IPV4bm.masc2.value = 255;
				document.IPV4bm.masc3.value = 255;
				document.IPV4bm.masc4.value = masc;        
         	}
	}
	
	
	if (ip1 > 127 && ip1 < 192)
	{
	  if (bitsmasc < 16 || bitsmasc > 30)
	  {
		alert("Não compativel número de bits da mascara.");
		form.bitsmasc.focus();
		return false;
	  }else
		bitsrede = parseInt(bitsmasc) - 16;
		subredes = Math.pow(2,bitsrede);
        nos = (65536 / parseInt(subredes));
		masc = Mascara(bitsrede);
		document.IPV4bm.classe.value = 'B';
		document.IPV4bm.subredes.value = subredes;
		document.IPV4bm.nos.value = nos; 
		document.IPV4bm.bitsrede.value = bitsrede;
		document.IPV4bm.bitsmasc.value = bitsmasc;
        	if (bitsrede < 9)
        	{ 
        		document.IPV4bm.masc1.value = 255;
				document.IPV4bm.masc2.value = 255;
				document.IPV4bm.masc3.value = masc;
				document.IPV4bm.masc4.value = 0;
        	}
        	if (bitsrede > 8 && bitsrede < 17 )
         	{  
				document.IPV4bm.masc1.value = 255;
				document.IPV4bm.masc2.value = 255;
				document.IPV4bm.masc3.value = 255;
				document.IPV4bm.masc4.value = masc;        
         	}
	}
	
	if (ip1 > 191 && ip1 < 224)
	{
		if (bitsmasc < 24 || bitsmasc > 30)
	  {
		alert("Não compativel número de bits da mascara.");
		form.bitsmasc.focus();
		return false;
	  }else
		bitsrede = parseInt(bitsmasc) - 24;
		subredes = Math.pow(2,bitsrede);
        nos = (256 / parseInt(subredes));
		masc = Mascara(bitsrede);
		document.IPV4bm.classe.value = 'C';
		document.IPV4bm.subredes.value = subredes;
		document.IPV4bm.nos.value = nos; 
		document.IPV4bm.bitsrede.value = bitsrede;
		document.IPV4bm.bitsmasc.value = bitsmasc;
        	
        	if (bitsrede <9)
         	{  
				document.IPV4bm.masc1.value = 255;
				document.IPV4bm.masc2.value = 255;
				document.IPV4bm.masc3.value = 255;
				document.IPV4bm.masc4.value = masc;        
         	}
	}
}	
}


function CalcBitsR()
{
	
 var classe = document.IPV4br.classe.value;
 var ip1 = document.IPV4br.ip1.value;
 var ip2 = document.IPV4br.ip2.value;
 var ip3 = document.IPV4br.ip3.value;
 var ip4 = document.IPV4br.ip4.value;
 var enbitsrede = document.IPV4br.enbitsrede.value;
 var subredes = document.IPV4br.subredes.value;
 var nos = document.IPV4br.nos.value;
 var bitsrede = document.IPV4br.bitsrede.value;
 var bitsmasc = document.IPV4br.bitsmasc.value;
  var verifica;
 verifica = VerificaIP(ip1,ip2,ip3,ip4);
 if (verifica == true)
 {
 bitsrede = enbitsrede;
 subredes = Math.pow(2,bitsrede);
 
	if (ip1 > 0 && ip1 < 127)
	{
	if (bitsrede < 0 || bitsrede > 22)
	  {
		alert("Não compativel número de bits da rede.");
		form.bitsmasc.focus();
		return false;
	  }else
		bitsmasc = parseInt(bitsrede) + 8;
        nos = (16777216 / parseInt(subredes));
		masc = Mascara(bitsrede);
		document.IPV4br.classe.value = 'A';
		document.IPV4br.subredes.value = subredes;
		document.IPV4br.nos.value = nos; 
		document.IPV4br.bitsrede.value = bitsrede;
		document.IPV4br.bitsmasc.value = bitsmasc;
		if (bitsrede < 9)
        	{
				document.IPV4br.masc1.value = 255;
				document.IPV4br.masc2.value = masc;
				document.IPV4br.masc3.value = 0;
				document.IPV4br.masc4.value = 0;
        	}
        	if (bitsrede > 8 && bitsrede < 17)
        	{ 
        		document.IPV4br.masc1.value = 255;
				document.IPV4br.masc2.value = 255;
				document.IPV4br.masc3.value = masc;
				document.IPV4br.masc4.value = 0;
        	}
        	if (bitsrede > 16 && bitsrede < 23 )
         	{  
				document.IPV4br.masc1.value = 255;
				document.IPV4br.masc2.value = 255;
				document.IPV4br.masc3.value = 255;
				document.IPV4br.masc4.value = masc;        
         	}
	}
	
	
	if (ip1 > 127 && ip1 < 192)
	{
		if (bitsrede < 0 || bitsrede > 14)
	  {
		alert("Não compativel número de bits da rede.");
		form.bitsmasc.focus();
		return false;
	  }else
		bitsmasc = parseInt(bitsrede) + 16;
        nos = (65536/ parseInt(subredes));
		masc = Mascara(bitsrede);
		document.IPV4br.classe.value = 'B';
		document.IPV4br.subredes.value = subredes;
		document.IPV4br.nos.value = nos; 
		document.IPV4br.bitsrede.value = bitsrede;
		document.IPV4br.bitsmasc.value = bitsmasc;
        	if (bitsrede < 9)
        	{ 
        		document.IPV4br.masc1.value = 255;
				document.IPV4br.masc2.value = 255;
				document.IPV4br.masc3.value = masc;
				document.IPV4br.masc4.value = 0;
        	}
        	if (bitsrede > 8 && bitsrede < 17 )
         	{  
				document.IPV4br.masc1.value = 255;
				document.IPV4br.masc2.value = 255;
				document.IPV4br.masc3.value = 255;
				document.IPV4br.masc4.value = masc;        
         	}
	}
	
	if (ip1 > 191 && ip1 < 224)
	{
		if (bitsrede < 0 || bitsrede > 6)
	  {
		alert("Não compativel número de bits da rede.");
		form.bitsmasc.focus();
		return false;
	  }else
		bitsmasc = parseInt(bitsrede) + 24;
        nos = (256/ parseInt(subredes));
		masc = Mascara(bitsrede);
		document.IPV4br.classe.value = 'C';
		document.IPV4br.subredes.value = subredes;
		document.IPV4br.nos.value = nos; 
		document.IPV4br.bitsrede.value = bitsrede;
		document.IPV4br.bitsmasc.value = bitsmasc;
        	
        	if (bitsrede <9)
         	{  
				document.IPV4br.masc1.value = 255;
				document.IPV4br.masc2.value = 255;
				document.IPV4br.masc3.value = 255;
				document.IPV4br.masc4.value = masc;        
         	}
	}
}	
}
