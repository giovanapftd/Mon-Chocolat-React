const transicao = document.querySelectorAll('#texto-principal h1, #texto-principal p, .linha-fina');

transicao.forEach((element, i) => {
    setTimeout(() => element.classList.add('visivel'), i * 300);
});



const produtos = {
    cookies: [
        { 
            titulo: "Cookie de Nutella", 
            descricao: "Crocante por fora, recheado com Nutella derretida por dentro.", 
            preco: "R$ 15,00", 
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789260981/Cookie_de_Nutella_ybs8ji.png" 
        },

        {
            titulo: "Cookie Red Velvet Recheado",
            descricao: "Cookie red velvet com gotas e recheio de chocolate branco.",
            preco: "R$ 15,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789928705/Imagem_do_Codex_20_de_set._de_2026_14_25_06_gza2zx.png"
        },

        {
            titulo: "Cookie Meio Amargo com Nutella",
            descricao: "Massa de chocolate meio amargo com gotas de chocolate e recheio de Nutella.",
            preco: "R$ 12,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789928677/Imagem_do_Codex_20_de_set._de_2026_14_19_59_yvxqx5.png"
        },

        {
            titulo: "Cookie de Pistache Recheado",
            descricao: "Cookie de matcha com pistache e recheio de pistache.",
            preco: "R$ 18,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789928666/Imagem_do_Codex_20_de_set._de_2026_14_27_28_oeuwrv.png"
        },

        {
            titulo: "Cookie de Oreo e Ninho",
            descricao: "Macio com pedaços de Oreo e recheio de brigadeiro de Ninho.",
            preco: "R$ 16,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789934634/Imagem_do_Codex_20_de_set._de_2026_15_30_39_vg6x6t.png"
        },

        {
            titulo: "Cookie Tradicional",
            descricao: "Cookie macio por dentro e douradinho por fora, com gotas de chocolate.",
            preco: "R$ 10,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789928669/Imagem_do_Codex_20_de_set._de_2026_15_08_46_bzc3ro.png"
        },

        {
            titulo: "Cookie Red Velvet",
            descricao: "Red velvet macio e saboroso, com gotas de chocolate branco.",
            preco: "R$ 12,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789928650/Imagem_do_Codex_20_de_set._de_2026_14_40_37_o8opf1.png"
        },

        {
            titulo: "Cookie Meio Amargo",
            descricao: "Massa de chocolate intensa e macia, com gotas de chocolate.",
            preco: "R$ 10,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789928676/Imagem_do_Codex_20_de_set._de_2026_15_08_39_o4qwji.png"
        },

        {
            titulo: "Cookie de Pistache",
            descricao: "Massa de matcha com pistache e um pedaço de chocolate branco por cima.",
            preco: "R$ 12,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789928686/Imagem_do_Codex_20_de_set._de_2026_14_35_21_xotccn.png"
        },

        {
            titulo: "Cookie de Oreo",
            descricao: "Macio com pedaços de Oreo e recheio de brigadeiro de Ninho.",
            preco: "R$ 10,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789928606/Imagem_do_Codex_20_de_set._de_2026_15_19_32_tecbgh.png"
        },

        {
            titulo: "Cookie de Ninho com Nutella",
            descricao: "Cookie recheado com brigadeiro de Ninho e uma bolinha de Nutella.",
            preco: "R$ 18,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789928675/Imagem_do_Codex_20_de_set._de_2026_15_06_43_s85nhg.png"
        },


        {
            titulo: "Cookie de Café com Chocolate",
            descricao: "Cookie de café com recheio de chocolate e café.",
            preco: "R$ 18,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789937356/Imagem_do_Codex_20_de_set._de_2026_17_48_22_a0d3j7.png"
        },

        {
            titulo: "Cookie de Chocolate Branco Recheado",
            descricao: "Massa tradicional com gotas e recheio de chocolate branco.",
            preco: "R$ 15,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789937546/Imagem_do_Codex_20_de_set._de_2026_17_52_12_hi7evs.png"
        },

        {
            titulo: "Cookie Meio Amargo com Ninho",
            descricao: "Massa intensa de chocolate meio amargo e recheio de brigadeiro de Ninho.",
            preco: "R$ 16,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789928596/Imagem_do_Codex_20_de_set._de_2026_15_21_13_timyjp.png"
        },

        {
            titulo: "Cookie de Doce de Leite",
            descricao: "Cookie com gotas de chocolate e um recheio de doce de leite.",
            preco: "R$ 15,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789928622/Imagem_do_Codex_20_de_set._de_2026_15_02_56_r7brv2.png"
        },

        {
            titulo: "Cookie Tradicional com Ninho",
            descricao: "Cookie tradicional com leite em pó polvilhado por cima.",
            preco: "R$ 10,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789934637/Imagem_do_Codex_20_de_set._de_2026_17_01_58_rwcq9o.png"
        },
        {
            titulo: "Cookie de Café",
            descricao: "Cookie intenso de chocolate com café, finalizado com um grão de café por cima.",
            preco: "R$ 12,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789928622/Imagem_do_Codex_20_de_set._de_2026_14_59_37_ki5cbe.png"
        },
        {
            titulo: "Cookie de Chocolate Branco",
            descricao: "Massa tradicional macia com gotas de chocolate branco.",
            preco: "R$ 10,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789934639/Imagem_do_Codex_20_de_set._de_2026_15_27_20_v6hdpw.png"
        }],
        


    brownies: [
        {
            titulo: "Brownie Tradicional",
            descricao: "Clássico e chocolatudo, com casquinha crocante e interior macio.",
            preco: "R$ 10,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789941231/Imagem_do_Codex_20_de_set._de_2026_18_08_14_i7e8ju.png"
        },

        {
            titulo: "Brownie com M&M's",
            descricao: "Brownie tradicional com confeitos de chocolate coloridos.",
            preco: "R$ 10,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789941227/Imagem_do_Codex_20_de_set._de_2026_18_22_25_elp3m1.png"
        },

        {
            titulo: "Brownie com Pistache",
            descricao: "Brownie tradicional finalizado com pistache triturado e um toque crocante.",
            preco: "R$ 12,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789941220/Imagem_do_Codex_20_de_set._de_2026_18_36_46_lxboex.png"
        },

        {
            titulo: "Brownie de Ferrero Rocher",
            descricao: "Recheado com creme de avelã e com pedaços crocantes de avelã.",
            preco: "R$ 15,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789942013/Imagem_do_Codex_20_de_set._de_2026_19_05_46_oq95x4.png"
        },

        {
            titulo: "Brownie com Chocolate Branco",
            descricao: "Brownie de chocolate intenso com recheio de chocolate branco.",
            preco: "R$ 12,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789941230/Imagem_do_Codex_20_de_set._de_2026_18_38_00_dgg8hz.png"
        },

        {
            titulo: "Brownie de Ninho e Nutella",
            descricao: "Recheado com creme de leite Ninho com Nutella.",
            preco: "R$ 15,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789351756/Brownie_de_Ninho_com_Nutella_ldyci0.png"
        },

        {
            titulo: "Brownie com Brigadeiro de Limão",
            descricao: "Brownie de chocolate recheado com raspas e brigadeiro de limão.",
            preco: "R$ 15,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789941204/Imagem_do_Codex_20_de_set._de_2026_18_53_00_blyuzj.png"
        },

        {
            titulo: "Brownie com Brigadeiro",
            descricao: "Brownie de chocolate recheado com brigadeiro cremoso.",
            preco: "R$ 12,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789941225/Imagem_do_Codex_20_de_set._de_2026_18_09_18_cak5e8.png"
        },

        {
            titulo: "Brownie com Doce de Leite",
            descricao: "Chocolate intenso combinado com um recheio de doce de leite.",
            preco: "R$ 15,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789941220/Imagem_do_Codex_20_de_set._de_2026_18_30_15_vlzleu.png"
        },

        {
            titulo: "Brownie com Chocolate Branco e Morango",
            descricao: "Recheio cremoso de chocolate com pedaços de morango.",
            preco: "R$ 18,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789941216/Imagem_do_Codex_20_de_set._de_2026_18_40_51_fyaqxa.png"
        },

        {
            titulo: "Brownie de Red Velvet",
            descricao: "Massa red velvet, recheada com chocolate branco cremoso.",
            preco: "R$ 15,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789941220/Imagem_do_Codex_20_de_set._de_2026_18_49_51_sboek3.png"
        },

        {
            titulo: "Brownie com Ninho com Oreo",
            descricao: "Recheio de leite Ninho com pedaços crocantes de Oreo.",
            preco: "R$ 18,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789941223/Imagem_do_Codex_20_de_set._de_2026_18_12_12_tvk9fl.png"
        },

        {
            titulo: "Brownie de Café",
            descricao: "Brownie com toque de café, recheio de chocolate e grãos de café.",
            preco: "R$ 18,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789941226/Imagem_do_Codex_20_de_set._de_2026_18_45_33_arhry1.png"
        },

        {
            titulo: "Brownie com Chocolate e Morango",
            descricao: "Recheio de chocolate com pedaços de morango.",
            preco: "R$ 15,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789941220/Imagem_do_Codex_20_de_set._de_2026_18_36_36_v3mi0v.png"
        }],
    


    donuts: [
        {
            titulo: "Donuts Glaceado",
            descricao: "Donut macio e fofinho, coberto com uma camada de glacê açucarado.",
            preco: "R$ 10,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1790103409/Imagem_do_Codex_22_de_set._de_2026_15_50_48_qjqnsq.png"
        },

        {
            titulo: "Donuts com Granulado",
            descricao: "Cobertura intensa de chocolate com granulado de chocolate.",
            preco: "R$ 10,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1790103398/Imagem_do_Codex_22_de_set._de_2026_14_53_49_tlc3g5.png"
        },

        {
            titulo: "Donuts com Chocolate Branco",
            descricao: "Donut fofinho coberto por uma camada de chocolate branco.",
            preco: "R$ 10,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1790103411/Imagem_do_Codex_22_de_set._de_2026_14_52_58_fyaaqg.png"
        },

        {
            titulo: "Donuts de Morango",
            descricao: "Macio, leve e coberto com uma cobertura de morango.",
            preco: "R$ 15,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789351749/Donuts_de_Morango_gktf9e.png"
        },

        {
            titulo: "Donuts de Ninho com Morango",
            descricao: "Cobertura de ninho, pedaços de morango e um recheio irresistível.",
            preco: "R$ 18,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1790103365/Imagem_do_Codex_22_de_set._de_2026_15_43_02_c8sx76.png"
        },

        {
            titulo: "Donuts de Pistache",
            descricao: "Coberto com creme de pistache e finalizado com pistaches crocantes.",
            preco: "R$ 18,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1790103379/Imagem_do_Codex_22_de_set._de_2026_15_42_47_wlhdca.png"
        },

        {
            titulo: "Donuts Tradicional",
            descricao: "Cobertura rosa sabor morango, finalizada com granulados coloridos.",
            preco: "R$ 12,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1790103411/Imagem_do_Codex_22_de_set._de_2026_14_55_06_chwnep.png"
        },

        {
            titulo: "Donuts de Banoffee",
            descricao: "Cobertura cremosa e suave, finalizada com um toque de cacau.",
            preco: "R$ 12,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1790103360/Gemini_Generated_Image__rp9ylm.jpg"
        },

        {
            titulo: "Donuts de Ouro Branco",
            descricao: "Cobertura de chocolate branco com pedaços de bombom de chocolate.",
            preco: "R$ 15,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1790103424/Imagem_do_Codex_22_de_set._de_2026_14_52_51_bljflk.png"
        },

        {
            titulo: "Donuts de Oreo",
            descricao: "Cobertura de chocolate com muitos pedaços de oreo.",
            preco: "R$ 15,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1790103418/Imagem_do_Codex_22_de_set._de_2026_14_44_58_o2bxoh.png"
        },

        {
            titulo: "Donuts de Ovomaltine",
            descricao: "Chocolate ao leite com pedaços crocantes de ovomaltine.",
            preco: "R$ 15,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1790103409/Imagem_do_Codex_22_de_set._de_2026_15_16_44_ixzctb.png"
        },

        {
            titulo: "Donuts de Red Velvet",
            descricao: "Massa vermelha macia, cobertura de chocolate branco e um delicioso toque de frutas vermelhas.",
            preco: "R$ 18,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1790103377/Imagem_do_Codex_22_de_set._de_2026_14_59_38_bmqmgs.png"
        },

        {
            titulo: "Donuts de Kinder Bueno",
            descricao: "Chocolate branco cremoso, chocolate ao leite e um pedaço de kinder bueno",
            preco: "R$ 18,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1790103381/Imagem_do_Codex_22_de_set._de_2026_15_32_34_trwyxw.png"
        },

        {
            titulo: "Donuts com M&M's",
            descricao: "Cobertura de chocolate  com confeitos de M&M's.",
            preco: "R$ 12,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1790103410/Imagem_do_Codex_22_de_set._de_2026_14_56_52_vk5dtu.png"
        },

        {
            titulo: "Donuts de Caramelo",
            descricao: "Chocolate, caramelo cremoso e pedaços crocantes.",
            preco: "R$ 15,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1790103413/Imagem_do_Codex_22_de_set._de_2026_15_14_27_p8tteu.png"
        }],
    


    bolos: [
        {
            titulo: "Bolo de Chocolate",
            descricao: "Massa de chocolate macia, com cobertura de chocolate ao leite e raspas de chocolate.",
            preco: "R$ 20,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1790195887/Imagem_do_Codex_23_de_set._de_2026_17_33_25_jkeobk.png"
        },

        {
            titulo: "Bolo de Chocolate com Morango",
            descricao: "Massa de chocolate com pedaços de morango, cobertura de chocolate ao leite e raspas de chocolate.",
            preco: "R$ 22,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1790195888/Imagem_do_Codex_23_de_set._de_2026_17_33_32_cksgzu.png"
        },

        {
            titulo: "Bolo de Chocolate Branco com Morango",
            descricao: "Massa branca com pedaços de morango, cobertura de chocolate branco e lascas de chocolate branco.",
            preco: "R$ 22,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1790195885/Imagem_do_Codex_23_de_set._de_2026_17_35_13_tjnghi.png"
        },

        {
            titulo: "Bolo de Maçã com Canela",
            descricao: "Massa com pedaços de maçã e canela, finalizada com cobertura, maçãs caramelizadas e um toque de canela.",
            preco: "R$ 25,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1790195887/Imagem_do_Codex_23_de_set._de_2026_17_34_43_zdpzud.png"
        },

        {
            titulo: "Bolo de Mirtilo",
            descricao: "Aveludado, fofinho e com cobertura de chocolate branco.",
            preco: "R$ 25,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1789351752/Bolo_de_Mirtilo_lyghzy.png"
        },

        {
            titulo: "Bolo de Limão",
            descricao: "Massa de baunilha com raspas de limão, cobertura de chocolate branco.",
            preco: "R$ 25,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1790195886/Imagem_do_Codex_23_de_set._de_2026_17_36_41_n4zrqh.png"
        },

        {
            titulo: "Bolo de Frutas Vermelhas",
            descricao: "Massa recheada com frutas vermelhas, cobertura de chocolate branco e uma combinação fresca de frutas.",
            preco: "R$ 28,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1790195886/Imagem_do_Codex_23_de_set._de_2026_17_34_51_hyyoyy.png"
        },

        {
            titulo: "Bolo de Pistache",
            descricao: "Massa de pistache com pedaços da matcha, cobertura cremosa e uma finalização de pistaches.",
            preco: "R$ 28,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1790195885/Imagem_do_Codex_23_de_set._de_2026_17_35_05_un7uyg.png"
        },

        {
            titulo: "Bolo de Red Velvet",
            descricao: "Massa vermelha com recheio cremoso de cream cheese e geleia de morango, coberta com chocolate branco.",
            preco: "R$ 25,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1790195885/Imagem_do_Codex_23_de_set._de_2026_17_34_17_t8zsgt.png"
        },

        {
            titulo: "Bolo de Nozes",
            descricao: "Massa delicada com nozes, coberta por uma camada de doce de leite e nozes.",
            preco: "R$ 25,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1790195885/Imagem_do_Codex_23_de_set._de_2026_17_35_28_wc0i8g.png"
        },

        {
            titulo: "Bolo de Banana com Chocolate",
            descricao: "Massa de chocolate meio amargo com pedaços de banana, cobertura de chocolate e raspas crocantes.",
            preco: "R$ 25,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1790195887/Imagem_do_Codex_23_de_set._de_2026_17_33_41_eynofk.png"
        },

        {
            titulo: "Bolo de Ninho",
            descricao: "Massa de baunilha com cobertura cremosa de brigadeiro de leite em pó e uma camada de leite em pó por cima.",
            preco: "R$ 22,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1790195886/Imagem_do_Codex_23_de_set._de_2026_17_34_25_w3jjus.png"
        },

        {
            titulo: "Bolo de Ninho com Nutella",
            descricao: "Massa clara e com veios de Nutella, cobertura de leite em pó e Nutella por cima.",
            preco: "R$ 25,00",
            img: "https://res.cloudinary.com/dn5ktthoj/image/upload/v1790195885/Imagem_do_Codex_23_de_set._de_2026_17_34_58_rjgjlk.png"
        }],
};

function carregarCards(categoria) {
    const container = document.querySelector(`.cardapio-${categoria}`);
    if (!container) return;

    const template = container.querySelector('template');
    if (!template) return;

    container.replaceChildren(template);

    produtos[categoria].forEach(p => {
        const card = template.content.cloneNode(true);
        const imagem = card.querySelector('img');
        
        imagem.src = p.img;
        imagem.alt = p.titulo;
        card.querySelector('.titulo-produto').textContent = p.titulo;
        card.querySelector('.descricao-produto').textContent = p.descricao;
        card.querySelector('.preco-produto').textContent = p.preco;

        container.appendChild(card);
    });
}

carregarCards('cookies');
carregarCards('brownies');
carregarCards('donuts');
carregarCards('bolos');
