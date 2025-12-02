window.aliensData.push(
    {
        "id": "ai",
        "expansion": "Cosmic Eons",
        "name": {
            "pt": "Ai",
            "en": "Ai"
        },
        "aka": "IA",
        "summary": {
            "pt": "Fica Mais Inteligente",
            "en": "Gets Smarter"
        },
        "power": {
            "pt": "<b>Você tem o poder de Pensar Adiante.</b> No início do turno de cada jogador, adicione um marcador nesta ficha.<br/><br/>Como um jogador principal, antes dos aliados serem convidados, você <b>pode usar</b> este poder para olhar um número de elementos secretos até o número de marcadores nesta ficha. Os elementos escondidos que você pode olhar são: cartas nas mãos do jogadores, cartas nos topos dos baralhos ou conjuntos de cartas de essence (ex.: As três cartas do topo de um baralho, ou três cartas do topo de diferentes baralhos), poderes de aliens secretos e cartas viradas para baixo escondidas pelos jogadores (por exemplo, o tesouro do Avarento ou qualquer reserva de cartas de essence).<br/><br/>Estes marcadores acumulam e não são \"gastos\" quando você usa o seu poder.",
            "en": "<b>You have the power to Think Ahead.</b> At the start of every player's turn, add one token to this sheet.<br/><br/>As a main player, before allies are invited, you <b>may use</b> this power to look at a number of hidden elements up to the number of tokens on this sheet. The hidden elements you can inspect are cards in players' hands, cards on the tops of decks or sets of essence cards (e.g., the top three cards from one deck, or three top cards from different decks), hidden alien powers, and facedown cards hidden by players (for example, in the Miser's hoard or any essence cache).<br/><br/>These tokens accumulate and are not \"spent\" when you use your power."
        },
        "history": {
            "pt": "Depois de um modesto início como uma calculadora programável, a IA teve um crescimento repentino depois que aprendeu a se replicar. Logo, a IA dominou todas as inteligências inferiores. Agora entediada, a IA está mandando cópias de si mesma para fora do Cosmos na esperança de encontrar e desenvolver novos tipos de inteligências.",
            "en": "After a modest beginning as a programmable calculator, the AI had a sudden growth spurt after it learned how to replicate itself. Soon, the AI dominated all inferior intelligences. Now bored, the AI is sending copies of itself out into the Cosmos hoping to find and envelop new types of intelligence."
        },
        "flare": {
            "wild": {
                "pt": "Como defesa, após as cartas de encontro serem selecionadas mas antes de serem reveladas, você pode olhar a carta do seu oponente sem mostrá-la aos outros. Então, ambos os jogadores principais retornam suas cartas de encontro para suas mãos e selecionam novamente (escolhendo as mesmas cartas ou diferentes).",
                "en": "As the defense, after encounter cards are selected but before they are revealed, you may look at your opponent's card without showing it to others. Then, both main players return their encounter cards to their hands and select again (choosing the same cards or different ones).",
                "timing": {
                    "player": {
                        "pt": "Apenas Defesa",
                        "en": "Defense Only"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": true,
                        "reveal": false,
                        "resolution": false
                    }
                }
            },
            "super": {
                "pt": "Ao adicionar um marcador à sua ficha de alienígena, você pode adicionar dois em vez de um.",
                "en": "When adding a token to your alien sheet, you may add two instead of one.",
                "timing": {
                    "player": {
                        "pt": "Como Qualquer Jogador",
                        "en": "As Any Player"
                    },
                    "phases": {
                        "startTurn": true,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": false,
                        "reveal": false,
                        "resolution": false
                    }
                }
            }
        },
        "timing": {
            "player": {
                "pt": "Apenas Jogador Principal",
                "en": "Main Player Only"
            },
            "choice": {
                "pt": "Opcional",
                "en": "Optional"
            },
            "phases": {
                "startTurn": false,
                "regroup": false,
                "destiny": false,
                "launch": false,
                "alliance": true,
                "planning": false,
                "reveal": false,
                "resolution": false
            }
        }
    },
    {
        "id": "alien",
        "expansion": "Cosmic Eons",
        "name": {
            "pt": "Alien",
            "en": "Alien"
        },
        "aka": "Alienígena",
        "summary": {
            "pt": "Abduz Outros Aliens",
            "en": "Abducts Other Aliens"
        },
        "power": {
            "pt": "<b>Você tem o poder de Traumatizar.</b> No início do turno de outro jogador, você <b>pode usar</b> este poder para capturar uma das naves de um jogador de qualquer colônia onde ele ou ela tenha pelo menos duas naves. Escolha um trauma de sua reserva de cartas de essence e coloque-o virado para baixo próximo a esta ficha com a nave capturada por cima. Você não pode manter refém mais do que uma nave de cada jogador por vez.<br/><br/>Quando você não for o atacante, antes das cartas de encontro serem escolhidas, você <b>pode usar</b> este poder para liberar uma ou ambas as naves dos jogadores principais que você capturou em turnos anteriores. Naves liberadas se juntam ao encontro indo para o Portão do Hiperespaço ou para o planeta alvo (isso pode exceder quaisquer limites no Portão do Hiperespaço) e a carta de trauma embaixo de cada uma é colocada virada para baixo sem ser vista, perto do jogador principal correspondente.<br/><br/>Quando um jogador com uma carta de trauma revela uma carta de encontro, ele ou ela deve também relevar a carta de trauma e aplicar o seu efeito. Cartas de traumas relevadas retornam para você.",
            "en": "<b>You have the power to Traumatize.</b> At the start of another player's turn, you <b>may use</b> this power to capture one of that player's ships from any colony where he or she has at least two ships. Choose one trauma from your essence card cache and place it facedown next to this sheet with the captured ship on top. You may not hold more than one of each player's ships captive at a time.<br/><br/>When you are not the offense, before encounter cards are selected, you <b>may use</b> this power to release one or both of the main players' ships you have captured on previous turns. Released ships join the encounter, going to the hyperspace gate or the targeted planet as appropriate (this may exceed any gate limits), and the trauma card under each one is placed facedown, unseen, near the corresponding main player.<br/><br/>When a player with a trauma card reveals an encounter card, he or she must also reveal that trauma card and carry out its effect. Revealed trauma cards are returned to you."
        },
        essence: {
            "name": {
                "pt": "Trauma",
                "en": "Trauma"
            },
            "list": {
                "1": {
                    "name": {
                        "pt": "Complexo de Vítima",
                        "en": "Victim Complex"
                    },
                    "body": {
                        "pt": "Se ambos os lados revelarem cartas de ataque e você tiver o total menor, adicione 2 ao seu total. Caso contrário, adicione 2 a qualquer compensação que lhe seja devida, subtraia 2 de qualquer compensação que você deva ou não perca naves se não conseguir negociar.",
                        "en": "If both sides reveal attack cards and you have the lower total, add 2 to your total. Otherwise, add 2 to any compensation you are due, subtract 2 from any compensation you owe, or lose no ships if you fail to deal."
                    }
                },
                "2": {
                    "name": {
                        "pt": "Colapso Nervoso",
                        "en": "Nervous Breakdown"
                    },
                    "body": {
                        "pt": "Você perde imediatamente o encontro e não recebe compensação. Prossiga para a fase de resolução e descarte as cartas jogadas normalmente.",
                        "en": "You immediately lose the encounter and collect no compensation. Proceed to the resolution phase and discard the played cards normally."
                    }
                },
                "3": {
                    "name": {
                        "pt": "Abandono",
                        "en": "Abandonment"
                    },
                    "body": {
                        "pt": "Qualquer ou todos os seus aliados podem devolver suas naves envolvidas para suas colônias ou trocá-las para o outro lado do encontro.",
                        "en": "Any or all of your allies may return their involved ships to their colonies, or switch them to the other side of the encounter."
                    }
                },
                "4": {
                    "name": {
                        "pt": "Ouvindo Vozes",
                        "en": "Hearing Voices"
                    },
                    "body": {
                        "pt": "Se todos os outros jogadores concordarem unanimemente, eles podem atualizar sua realidade de uma das seguintes maneiras: enviando 1 de suas colônias para o warp, descartando metade das cartas de sua mão aleatoriamente ou dando a você 1 ou 2 cartas da pilha de descarte.",
                        "en": "If all other players can unanimously agree, they may update your reality in one of the following ways: sending 1 of your colonies to the warp, discarding half of the cards in your hand at random, or giving you any 1 or 2 cards from the discard pile."
                    }
                },
                "5": {
                    "name": {
                        "pt": "Ouvindo Vozes",
                        "en": "Hearing Voices"
                    },
                    "body": {
                        "pt": "Se todos os outros jogadores concordarem unanimemente, eles podem atualizar sua realidade de uma das seguintes maneiras: enviando 1 de suas colônias para o warp, descartando metade das cartas de sua mão aleatoriamente ou dando a você 1 ou 2 cartas da pilha de descarte.",
                        "en": "If all other players can unanimously agree, they may update your reality in one of the following ways: sending 1 of your colonies to the warp, discarding half of the cards in your hand at random, or giving you any 1 or 2 cards from the discard pile."
                    }
                },
                "6": {
                    "name": {
                        "pt": "Alucinações",
                        "en": "Hallucinations"
                    },
                    "body": {
                        "pt": "Seu oponente pode trocar sua carta de encontro revelada por qualquer outra carta de encontro de sua mão.",
                        "en": "Your opponent may exchange his or her revealed encounter card with any other encounter card from his or her hand."
                    }
                },
                "7": {
                    "name": {
                        "pt": "Alucinações",
                        "en": "Hallucinations"
                    },
                    "body": {
                        "pt": "Seu oponente pode trocar sua carta de encontro revelada por qualquer outra carta de encontro de sua mão.",
                        "en": "Your opponent may exchange his or her revealed encounter card with any other encounter card from his or her hand."
                    }
                },
                "8": {
                    "name": {
                        "pt": "Agressão",
                        "en": "Aggression"
                    },
                    "body": {
                        "pt": "Você pode jogar quaisquer cartas de ataque da sua mão como reforços.",
                        "en": "You may play any attack cards in your hand as reinforcements."
                    }
                },
                "9": {
                    "name": {
                        "pt": "Depressão",
                        "en": "Depression"
                    },
                    "body": {
                        "pt": "Se você revelar uma carta de ataque, seu valor é 00.",
                        "en": "If you reveal an attack card, its value is 00."
                    }
                }
            }
        },
        "history": {
            "pt": "Os Aliens são na verdade bastante infantis em sua curiosidade infinita e não sabem que seus simplórios jogos de abdução não são apreciados.",
            "en": "The Aliens are actually quite child-like in their boundless curiosity, and are unaware that their simple abduction games are not appreciated."
        },
        "flare": {
            "wild": {
                "pt": "No início do seu turno, você pode pedir a outro jogador para lhe dar cinco naves que você manterá como reféns, devolvendo-as no final do seu turno. Em vez de lhe dar as naves, o jogador pode lhe oferecer qualquer coisa que poderia lhe dar como parte de um acordo e/ou concordar em receber cartas da sua mão. Se você aceitar o acordo, todas as naves permanecem no lugar.",
                "en": "At the start of your turn, you may ask one other player to give you five ships which you will hold as hostages, returning them at the end of your turn. Instead of giving you the ships, the player may offer you anything they could give you as part of a deal and/or agree to receive cards from your hand. If you accept the deal, all ships remain in place.",
                "timing": {
                    "player": {
                        "pt": "Apenas Ataque",
                        "en": "Offense Only"
                    },
                    "phases": {
                        "startTurn": true,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": false,
                        "reveal": false,
                        "resolution": false
                    }
                }
            },
            "super": {
                "pt": "Você pode capturar a nave de um jogador mesmo se já tiver um ou mais prisioneiros daquele jogador. Coloque uma carta de trauma sob cada nave que você capturar.",
                "en": "You may capture a player's ship even if you already have one or more captives from that player. Place a trauma card under each ship you capture.",
                "timing": {
                    "player": {
                        "pt": "Não Ataque",
                        "en": "Not Offense"
                    },
                    "phases": {
                        "startTurn": true,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": false,
                        "reveal": false,
                        "resolution": false
                    }
                }
            }
        },
        "timing": {
            "player": {
                "pt": "Não Ataque",
                "en": "Not Offense"
            },
            "choice": {
                "pt": "Opcional",
                "en": "Optional"
            },
            "phases": {
                "startTurn": true,
                "regroup": false,
                "destiny": false,
                "launch": false,
                "alliance": false,
                "planning": true,
                "reveal": false,
                "resolution": false
            }
        }
    },
    {
        "id": "anarchist",
        "expansion": "Cosmic Eons",
        "name": {
            "pt": "Anarchist",
            "en": "Anarchist"
        },
        "aka": "Anarquista",
        "summary": {
            "pt": "Perturba as Regras",
            "en": "Disrupts Rules"
        },
        "power": {
            "pt": "<b>Você tem o poder do Caos.</b> Como um jogador principal, sempre que você perde um encontro ou falha em fechar um acordo, <b>use</b> este poder para quebrar uma regra do jogo revelando uma disruptura de regra da sua reserva de cartas de essence. Inicialmente você mantém a carta aberta nesta ficha e somente você <b>pode usar</b> a regra nova.<br/><br/>Uma vez por encontro, você pode permitir que outro jogador mova uma de suas cartas abertas de disruptura desta ficha para a ficha de alien dele ou dela. Agora vocês podem ter vantagem naquela regra nova. Depois disso, você imediatamente revela outra carta de disruptura de sua reserva de cartas de essence.<br/><br/>Depois que qualquer outro jogador usou uma regra nova, ele ou ela pode imediatamente colocar a disruptura no meio da área de jogo e então qualquer um pode usar aquela regra nova. Disrupturas são cumulativas. Quando você tiver revelado todas as 8 disrupturas, você vence o jogo. Você pode vencer ainda pelo método tradicional.",
            "en": "<b>You have the power of Chaos.</b> As a main player, whenever you lose an encounter or fail to make a deal, <b>use</b> this power to disrupt a game rule by revealing one disruption from your essence card cache. At first you keep the card faceup on this sheet and only you <b>may use</b> the disrupted rule.<br/><br/>Once per encounter, you may allow another player to move one of your faceup disruptions from this sheet next to his or her alien sheet. Now both of you may take advantage of that disrupted rule. Afterwards, you immediately reveal another disruption from your essence card cache.<br/><br/>After any other player has used a disrupted rule, he or she immediately places that disruption in the center of the playing area and then everyone may use that disrupted rule. Disruptions are cumulative. When you have revealed all 8 disruptions, you win the game. You may still win the game via the normal method."
        },
        essence: {
            "name": {
                "pt": "Ruptura",
                "en": "Disruption"
            },
            "list": {
                "1": {
                    "name": {
                        "pt": "Warp",
                        "en": "Warp"
                    },
                    "body": {
                        "pt": "Quando você deve recuperar uma ou mais de suas naves do warp, você pode recuperar todas elas.",
                        "en": "When you should retrieve one or more of your ships from the warp, you may retrieve all of them."
                    }
                },
                "2": {
                    "name": {
                        "pt": "Sucesso",
                        "en": "Success"
                    },
                    "body": {
                        "pt": "Você não precisa ser bem-sucedido em seu primeiro encontro para ter um segundo encontro.",
                        "en": "You do not need to be successful on your first encounter to have a second encounter."
                    }
                },
                "3": {
                    "name": {
                        "pt": "Recompensas",
                        "en": "Rewards"
                    },
                    "body": {
                        "pt": "Você tem o direito de ver todas as cartas compradas do(s) baralho(s) para recompensas.",
                        "en": "You have a right to see all cards drawn from deck(s) for rewards."
                    }
                },
                "4": {
                    "name": {
                        "pt": "Mão",
                        "en": "Hand"
                    },
                    "body": {
                        "pt": "Quando você não tem cartas de ataque, você pode descartar sua mão e comprar uma nova a qualquer momento (potencialmente continuando seu turno se você for o ataque).",
                        "en": "When you have no attack cards, you may discard your hand and draw a new one at any time (potentially continuing your turn if you are the offense)."
                    }
                },
                "5": {
                    "name": {
                        "pt": "Portal",
                        "en": "Gate"
                    },
                    "body": {
                        "pt": "Todos os limites no número total de naves que você pode enviar para o portal do hiperespaço são ignorados, incluindo limites específicos (como os do Macron).",
                        "en": "All limits on the total number of ships that you can send to the hyperspace gate are ignored, including specific limits (such as those of the Macron)."
                    }
                },
                "6": {
                    "name": {
                        "pt": "Destino",
                        "en": "Destiny"
                    },
                    "body": {
                        "pt": "Sempre que você deve comprar do baralho de destino, você pode, em vez disso, olhar através desse baralho e escolher qual carta comprar. Depois, embaralhe o baralho de destino, a menos que esta ruptura tenha se tornado utilizável por todos os jogadores.",
                        "en": "Whenever you should draw from the destiny deck, you may instead look through that deck and choose which card to draw. Afterwards, shuffle the destiny deck unless this disruption has become usable by all players."
                    }
                },
                "7": {
                    "name": {
                        "pt": "Compensação",
                        "en": "Compensation"
                    },
                    "body": {
                        "pt": "Toda ou parte da sua compensação pode ser convertida em recompensas.\n\nQuando você deve receber uma recompensa, você pode pegar uma carta de qualquer jogador em compensação.",
                        "en": "All or part of your compensation may be converted to rewards.\n\nWhen you should receive a reward, you may take a card from any player in compensation instead."
                    }
                },
                "8": {
                    "name": {
                        "pt": "Aliança",
                        "en": "Alliance"
                    },
                    "body": {
                        "pt": "Você pode se aliar sem ser convidado, mas se o fizer e perder naves para o warp, você perde o dobro.",
                        "en": "You may ally without being invited, but if you do and you lose ships to the warp, you lose twice as many."
                    }
                }
            }
        },
        "history": {
            "pt": "Os Anarquistas se ofendem com as formalidades de interação usadas ao longo das eras, sufocando seus oponentes sendo não ortodoxos.",
            "en": "The Anarchists take umbrage with the formalities of interaction used over the eons, smothering their opponents with unorthodoxy at every juncture."
        },
        "flare": {
            "wild": {
                "pt": "Você pode se rebelar de uma das seguintes maneiras: Em vez de aceitar sua carta de destino, compre o destino novamente. Em vez de enviar suas naves para o warp, devolva-as para suas colônias. Em vez de ver as naves de seus aliados ofensivos vencedores pousarem em um planeta, envie todas elas para o warp.",
                "en": "You may rebel in one of the following ways: Instead of accepting your destiny card, draw destiny again. Instead of sending your ships to the warp, return them to your colonies. Instead of seeing your winning offensive allies' ships land on a planet, send them all to the warp.",
                "timing": {
                    "player": {
                        "pt": "Como Qualquer Jogador",
                        "en": "As Any Player"
                    },
                    "phases": {
                        "startTurn": true,
                        "regroup": true,
                        "destiny": true,
                        "launch": true,
                        "alliance": true,
                        "planning": true,
                        "reveal": true,
                        "resolution": true
                    }
                }
            },
            "super": {
                "pt": "Como aliado, você pode usar seu poder para revelar uma ruptura quando seu lado perder o encontro ou você for dispensado porque ambos os jogadores principais devem tentar negociar.",
                "en": "As an ally, you may use your power to reveal a disruption when your side loses the encounter or you are dismissed because both main players must attempt to deal.",
                "timing": {
                    "player": {
                        "pt": "Apenas Aliado",
                        "en": "Ally Only"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": false,
                        "reveal": true,
                        "resolution": false
                    }
                }
            }
        },
        "timing": {
            "player": {
                "pt": "Apenas Jogador Principal",
                "en": "Main Player Only"
            },
            "choice": {
                "pt": "Obrigatório",
                "en": "Mandatory"
            },
            "phases": {
                "startTurn": false,
                "regroup": false,
                "destiny": false,
                "launch": false,
                "alliance": false,
                "planning": false,
                "reveal": false,
                "resolution": true
            }
        }
    },
    {
        "id": "architect",
        "expansion": "Cosmic Eons",
        "name": {
            "pt": "Architect",
            "en": "Architect"
        },
        "aka": "Arquiteto",
        "summary": {
            "pt": "Empilha Planetas",
            "en": "Stacks Planets"
        },
        "power": {
            "pt": "<b>Você tem o poder de Construir Torres.</b> Quando você vence como um jogador principal, no final do encontro, <b>use</b> este poder para criar ou expandir uma torre no sistema do seu oponente. Se você ainda não tem uma torre neste sistema, escolha dois dos planetas daquele sistema (se o planeta alvo estiver naquele sistema, ele deve ser uma de suas escolhas). Una esses dois planetas (um em cima do outro), colocando todas as naves de ambos no topo da torre de planetas de dois níveis. Se você já tem uma torre no sistema do oponente, então escolha outro planeta nesse sistema e empilhe-o na torre como um novo nível, colocando suas naves no topo.\n        <br/><br/>Apenas planetas com cores normais de jogadores podem ser mesclados. Não crie um planeta mesclado usando planetas com cores de jogador não utilizadas ou que excedam quaisquer limites, como mais de um marcador de emaranhamento, etc..\n        <br/><br/>Como um jogador principal, depois das cartas de encontro serem reveladas, <b>use</b> este poder para dobrar o seu total se você tem uma torre de dois ou mais níveis no sistema do oponente, uma torre de três ou mais níveis em um sistema adjacente ao sistema do oponente ou uma torre de quatro ou mais níveis em qualquer sistema.\n        <br/><br/>Cada torre conta como um único planeta. Torres são permanentes mesmo que você perca o uso delas. Se qualquer jogador não puder ganhar colônias estrangeiras suficientes para vencer o jogo devido a planetas estrangeiros insuficientes, você vence o jogo.",
            "en": "<b>You have the power to Build Towers.</b> When you win as a main player, at the end of the encounter <b>use</b> this power to create or expand a tower in your opponent's system. If you do not already have a tower in that system, choose two of that system's planets (if the targeted planet is in that system, it must be one of your choices). Merge those two planets together, placing all ships from both on the top of the two-level tower. If you already have a tower in the opponent's system, then instead select another planet in that system and merge it into the tower as a new level, placing its ships on top.\n        <br/><br/>Only normal player-color planets can be merged. Do not create a merged planet using planets with unused player colors or that would exceed any limits, such as more than one entanglement token, etc.\n        <br/><br/>As a main player, after encounter cards are revealed, <b>use</b> this power to double your total if you have a tower of two or more levels in the opponent's system, a tower of three or more levels in a system adjacent to the opponent's system, or a tower of four or more levels in any system.\n        <br/><br/>Each tower counts as a single planet. Towers are permanent, even if you lose the use of them. If any player cannot gain enough foreign colonies to win the game due to insufficient foreign planets, you win the game."
        },
        "history": {
            "pt": "Construtores habilidosos, os Arquitetos agora procuram incorporar os trabalhos de outros em suas construções.",
            "en": "Skilled builders, the Architects now seek to drag the works of others into their constructions."
        },
        "flare": {
            "wild": {
                "pt": "Como jogador principal, após as cartas de encontro serem reveladas, você pode descartar uma carta de ataque da sua mão e então adicionar 1 ao seu total para cada carta abaixo dela em sua pilha de descarte. Dê esta flare ao Arquiteto após o uso (ou descarte-a, se o Arquiteto não estiver jogando).",
                "en": "As a main player, after encounter cards are revealed, you may discard one attack card from your hand and then add 1 for each card below it in its discard pile to your total. Give this flare to the Architect after use (or discard it, if the Architect isn't playing).",
                "timing": {
                    "player": {
                        "pt": "Apenas Jogador Principal",
                        "en": "Main Player Only"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": false,
                        "reveal": true,
                        "resolution": false
                    }
                }
            },
            "super": {
                "pt": "Ao usar seu poder, você pode criar ou expandir uma torre em seu próprio sistema em vez de no sistema do seu oponente.",
                "en": "When using your power, you may create or expand a tower in your own system instead of your opponent's system.",
                "timing": {
                    "player": {
                        "pt": "Apenas Jogador Principal",
                        "en": "Main Player Only"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": false,
                        "reveal": false,
                        "resolution": true
                    }
                }
            }
        },
        "timing": {
            "player": {
                "pt": "Apenas Jogador Principal",
                "en": "Main Player Only"
            },
            "choice": {
                "pt": "Obrigatório",
                "en": "Mandatory"
            },
            "phases": {
                "startTurn": false,
                "regroup": false,
                "destiny": false,
                "launch": false,
                "alliance": false,
                "planning": false,
                "reveal": true,
                "resolution": true
            }
        }
    },
    {
        "id": "assistant",
        "expansion": "Cosmic Eons",
        "name": {
            "pt": "Assistant",
            "en": "Assistant"
        },
        "aka": "Assistente",
        "summary": {
            "pt": "Torna os Jogadores Melhores",
            "en": "Makes Players Better"
        },
        "power": {
            "pt": "<b>Você tem o poder de Ser Útil.</b> Como um jogador principal ou aliado, depois das alianças serem formadas mas antes das cartas de encontro serem escolhidas, <b>use</b> este poder se há quaisquer outro(s) jogador(es) no seu lado do encontro. Dê uma carta de ajuda da sua reserva de cartas de essence para um desses jogadores e então ganhe uma recompensa. O jogador que recebeu a carta pode mante-la virada para cima ou para baixo e olha-la.<br/><br/>Outros jogadores podem devolver as cartas de ajuda deles ou delas para você pelo tempo da carta de ajuda. Quando eles ou elas o fizerem, <b>use</b> este poder para prover a ajuda conforme instruído; então ou ganhe uma recompensa ou se você puder usar imediatamente esta carta para você, você pode fazer isso antes de colocar a carta virada para cima na pilha de indisponíveis.",
            "en": "<b>You have the power to Be Helpful. As a main player or ally, after alliances are formed but before encounter cards are selected, <b>use</b> this power if there are any other player(s) on your side of the encounter. Give one help card from your essence card cache to one of those players and then gain one reward. A player who has been given a help card can keep it faceup or facedown and look at it.<br/><br/>Other players may give their help cards back to you per the timing on the help card. When they do, <b>use</b> this power to provide the help as instructed; then either gain one reward or, if you can immediately use the help card for yourself, you may do so before placing the card faceup in the unavailable pile."
        },
        essence: {
            "name": {
                "pt": "Ajuda",
                "en": "Help"
            },
            "list": {
                "1": {
                    "name": {
                        "pt": "Território Perdido",
                        "en": "Lost Territory"
                    },
                    "body": {
                        "pt": "A qualquer momento, se você perdeu uma colônia natal, o Assistente recolonizará um de seus planetas natais usando até 3 de suas naves de suas outras colônias e/ou do warp, conforme suas instruções.",
                        "en": "At any time, if you have lost a home colony, the Assistant will recolonize one of your home planets using up to 3 of your ships from your other colonies and/or the warp per your instructions."
                    }
                },
                "2": {
                    "name": {
                        "pt": "Escassez de Naves",
                        "en": "Ship Scarcity"
                    },
                    "body": {
                        "pt": "A qualquer momento, o Assistente recuperará qualquer ou todas as suas naves do warp, conforme suas instruções.",
                        "en": "At any time, the Assistant will retrieve any or all of your ships from the warp per your instructions."
                    }
                },
                "3": {
                    "name": {
                        "pt": "Mão Bagunçada",
                        "en": "Messy Hand"
                    },
                    "body": {
                        "pt": "Quando você compra uma nova mão, o Assistente fará uma pré-seleção para você, descartando algumas das cartas conforme suas instruções, devolvendo a você uma mão mais eficiente e útil.",
                        "en": "When you draw a new hand, the Assistant will pre-screen it for you, discarding some of the cards per your instructions, returning to you a more efficient and useful hand."
                    }
                },
                "4": {
                    "name": {
                        "pt": "Colônias Bagunçadas",
                        "en": "Messy Colonies"
                    },
                    "body": {
                        "pt": "A qualquer momento, o Assistente redistribuirá suas naves entre suas colônias, conforme suas instruções.",
                        "en": "At any time, the Assistant will redistribute your ships among your colonies per your instructions."
                    }
                },
                "5": {
                    "name": {
                        "pt": "Carta Necessária",
                        "en": "Needed Card"
                    },
                    "body": {
                        "pt": "Todos os limites no número total de naves que você pode enviar para o portal do hiperespaço são ignorados, incluindo limites específicos (como os do Macron).",
                        "en": "All limits on the total number of ships that you can send to the hyperspace gate are ignored, including specific limits (such as those of the Macron)."
                    }
                },
                "6": {
                    "name": {
                        "pt": "Aliado Relutante",
                        "en": "Unwilling Ally"
                    },
                    "body": {
                        "pt": "Depois que um jogador que não seja o Assistente escolher se aliar ou não e/ou quantas naves trazer, o Assistente anulará a decisão desse jogador, conforme suas instruções.",
                        "en": "After a player other than the Assistant has chosen whether or not to ally and/or how many ships to bring, the Assistant will override that player's decision per your instructions."
                    }
                }
            }
        },
        "history": {
            "pt": "Dominando a arte da obscuridade, os Assistentes parecem ser onipresentes e implacáveis. O seu status inferior é um véu com o qual eles adquirem silenciosamente uma vasta gama de recursos.",
            "en": "Mastering the art of obscurity, the Assistants seem to be omnipresent, relentlessly. Their inferior status is a veil from which they now quietly acquire a vast array of unnoticed resources."
        },
        "flare": {
            "wild": {
                "pt": "Você pode recolonizar um de seus planetas natais usando uma ou mais de suas naves no warp. Dê esta flare ao Assistente após o uso (ou descarte-a, se o Assistente não estiver jogando).",
                "en": "You may recolonize one of your home planets using one or more of your ships in the warp. Give this flare to the Assistant after use (or discard it, if the Assistant isn't playing).",
                "timing": {
                    "player": {
                        "pt": "Como Qualquer Jogador",
                        "en": "As Any Player"
                    },
                    "phases": {
                        "startTurn": true,
                        "regroup": true,
                        "destiny": true,
                        "launch": true,
                        "alliance": true,
                        "planning": true,
                        "reveal": true,
                        "resolution": true
                    }
                }
            },
            "super": {
                "pt": "Quando uma carta de ajuda é devolvida a você, você pode descartar imediatamente uma carta do seu cache de cartas de essência e substituí-la pela carta devolvida.",
                "en": "When a help card is returned to you, you may immediately discard a card from your essence card cache and replace it with the returned card.",
                "timing": {
                    "player": {
                        "pt": "Como Qualquer Jogador",
                        "en": "As Any Player"
                    },
                    "phases": {
                        "startTurn": true,
                        "regroup": true,
                        "destiny": true,
                        "launch": true,
                        "alliance": true,
                        "planning": true,
                        "reveal": true,
                        "resolution": true
                    }
                }
            }
        },
        "timing": {
            "player": {
                "pt": "Como Qualquer Jogador",
                "en": "As Any Player"
            },
            "choice": {
                "pt": "Obrigatório",
                "en": "Mandatory"
            },
            "phases": {
                "startTurn": true,
                "regroup": true,
                "destiny": true,
                "launch": true,
                "alliance": true,
                "planning": true,
                "reveal": true,
                "resolution": true
            }
        }
    },
    {
        "id": "bleeding_heart",
        "expansion": "Cosmic Eons",
        "name": {
            "pt": "Bleeding Heart",
            "en": "Bleeding Heart"
        },
        "aka": "Coração Mole",
        "summary": {
            "pt": "Cartas Baixas de Ataques Viram Cartas de Negociação",
            "en": "Low Attacks Become Negotiates"
        },
        "power": {
            "pt": "<b>Você tem o poder da Harmonia.</b> Em qualquer encontro, antes dos aliados serem convidados, você <b>pode usar</b> este poder para dizer \"Que haja paz!\" Se você o fizer, todas as cartas de ataque com um valor de 10 ou menos tornam-se cartas de negociação quando reveladas e todas as compensações serão dobradas.",
            "en": "<b>You have the power of Rapport.</b> On any encounter, before allies are invited, you <b>may use</b> this power to say \"Let there be peace!\" If you do, all attack cards with a value of 10 or lower become negotiate cards when revealed and all compensation is doubled."
        },
        "history": {
            "pt": "Os Corações Moles são uma raça irresistivelmente bela. Todas as formas de vida e não-vida que eles encontram ficam maravilhados e impotentes na presença de sua beleza e assombrosa aura de paz que eles liberam sempre que os aliens se encontram. Seu objetivo é rebalancear encontros entre aliens e criar universos cósmicos pacíficos onde a consciência de toda espécie se dedique a apreciar a beleza dos encontros pacíficos.",
            "en": "The Bleeding Hearts are an irresistibly beautiful species. All life and non-life forms they have encountered are awed and powerless in the presence of their beauty and the haunting aura of peace they release whenever aliens encounter each other. Their goal is to re-balance encounters between aliens and to create more peaceful Cosmic Universes where consciousness of every kind dedicates itself to appreciating the beauty of peaceful encounters."
        },
        "flare": {
            "wild": {
                "pt": "Como jogador principal, antes de os aliados serem convidados, você pode dizer 'Que haja paz'. Se o fizer, todas as cartas de Ataque com valor 10 ou menos tornam-se cartas de Negociação quando reveladas, e toda compensação é dobrada.",
                "en": "As a main player, before allies are invited, you may say \"Let There Be Peace.\" If you do, all Attack cards with a value of 10 or lower become Negotiate cards when they are revealed, and all compensation is doubled.",
                "timing": {
                    "player": {
                        "pt": "Como Qualquer Jogador",
                        "en": "As Any Player"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": true,
                        "planning": false,
                        "reveal": false,
                        "resolution": false
                    }
                }
            },
            "super": {
                "pt": "Como jogador principal, antes de os aliados serem convidados, você pode usar este poder para dizer 'Que haja paz'. Se o fizer, todas as cartas de Ataque com valor 10 ou menos tornam-se cartas de Negociação quando reveladas, e toda compensação é dobrada.",
                "en": "As a main player, before allies are invited, you may use this power to say \"Let There Be Peace.\" If you do, all Attack cards with a value of 10 or lower become Negotiate cards when they are revealed, and all compensation is doubled.",
                "timing": {
                    "player": {
                        "pt": "Apenas Jogador Principal",
                        "en": "Main Player Only"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": false,
                        "reveal": false,
                        "resolution": true
                    }
                }
            }
        },
        "timing": {
            "player": {
                "pt": "Como Qualquer Jogador",
                "en": "As Any Player"
            },
            "choice": {
                "pt": "Opcional",
                "en": "Optional"
            },
            "phases": {
                "startTurn": false,
                "regroup": false,
                "destiny": false,
                "launch": false,
                "alliance": true,
                "planning": false,
                "reveal": false,
                "resolution": false
            }
        }
    },
    {
        "id": "cloak",
        "expansion": "Cosmic Eons",
        "name": {
            "pt": "Cloak",
            "en": "Cloak"
        },
        "aka": "Manto",
        "summary": {
            "pt": "Faz Mudanças Secretas",
            "en": "Makes Secret Changes"
        },
        "power": {
            "pt": "<b>Você tem o poder de Agir Sem Ser Visto.</b> Sempre que ambos os lados em um encontro revelarem cartas de ataque e o total dessas cartas for 20 ou mais, você <b>pode usar</b> este poder imediatamente. Todos os jogadores devem espalhar suas cartas das mãos viradas para baixo na mesa e então os outros jogadores imediatamente fecham seus olhos e se afastam da mesa enquanto você conta 15 segundos em voz alta. Nesse período, você pode mover uma nave, carta, ambas ou nenhuma. Se mover uma nave, ela deve ser de um planeta para outro planeta ou para o warp, ou do warp para um planeta. Se mover uma carta, deve ser da mão de um jogador (sem olhar) para outro ou para o topo da pilha de descarte apropriada, ou do topo de uma pilha de descarte para a mão de um jogador. Como uma distração, você pode mudar levemente outras naves e cartas sem mudar suas localizações.<br/><br/>Depois que os primeiros 15 segundos acabarem, conte outros 15 segundos enquanto os outros jogadores verificam as mudanças que você fez. Eles não podem tocar suas as cartas deles ou delas, discutir, gesticular ou comunicar-se uns com os outros de forma nenhuma. Antes do tempo acabar, qualquer um desses pode alegar que você moveu uma nave, uma carta, ambas ou nenhuma e deve identificar a fonte ou destino de cada movimento. Se um jogador estiver completamente certo, ele ou ela podem desfazer qualquer ou todas as mudanças ou receber uma recompensa. Se o jogador estiver errado ou nenhuma reivindicação for feita antes do tempo acabar, nenhuma mudança é desfeita e você recebe uma recompensa.",
            "en": "<b>You have the power to Act Unseen.</b> Whenever both sides in an encounter reveal attack cards and the total of those cards is 20 or more, you <b>may use</b> this power immediately. All players must fan out their hands facedown on the table and then the other players immediately close their eyes and turn away from the table while you count out 15 seconds aloud. During this time you may move one ship, one card, both, or neither. If moving a ship, it must be from a planet to another planet or the warp, or from the warp to a planet. If moving a card, it must be from one player's hand (without peeking) to another or to the top of the appropriate discard pile, or from the top of a discard pile to a player's hand. As a diversion, you may slightly shift other ships and cards without changing their location.<br/><br/>After the first 15 seconds are up, count out another 15 seconds while the other players look for the changes you made. They may not touch their cards or discuss, gesture, or communicate with each other in any way. Before time runs out, any one of those players, on a first-come, first-served basis, may claim that you moved one ship, one card, both, or neither, and must identify either the source or destination for each move. If that player is completely correct, he or she may either undo any or all changes or receive one reward. If the player is incorrect or no claim is made before time runs out, no changes are undone and you receive one reward."
        },
        "history": {
            "pt": "Cansados de pequenos furtos e entediados com o voyeurismo mesquinho, os Mantos agora se aventuram fazendo ajustes aqui e ali.",
            "en": "Tired of simplistic shoplifting and bored with petty voyeurism, the Cloaks now venture forth draped in interstellar gauze, tweaking this and adjusting that."
        },
        "flare": {
            "wild": {
                "pt": "Como jogador principal ou aliado, durante a fase de planejamento, você pode forçar cada jogador (incluindo você) a passar simultaneamente uma carta de sua mão para o jogador à sua esquerda. Qualquer jogador que não tiver cartas na mão deve passar a carta recebida para o próximo jogador, mas pode espiá-la primeiro.",
                "en": "As a main player or ally, during the planning phase, you may force each player (including yourself) to simultaneously pass one card from their hand to the player on their left. Any player who has no cards in hand must pass the card received along to the next player, but may peek at it first.",
                "timing": {
                    "player": {
                        "pt": "Apenas Jogador Principal ou Aliado",
                        "en": "Main Player or Ally Only"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": true,
                        "reveal": false,
                        "resolution": false
                    }
                }
            },
            "super": {
                "pt": "Você pode usar seu poder se ambos os lados revelarem cartas de negociação.",
                "en": "You may use your power if both sides reveal negotiate cards.",
                "timing": {
                    "player": {
                        "pt": "Como Qualquer Jogador",
                        "en": "As Any Player"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": false,
                        "reveal": true,
                        "resolution": false
                    }
                }
            }
        },
        "timing": {
            "player": {
                "pt": "Como Qualquer Jogador",
                "en": "As Any Player"
            },
            "choice": {
                "pt": "Opcional",
                "en": "Optional"
            },
            "phases": {
                "startTurn": false,
                "regroup": false,
                "destiny": false,
                "launch": false,
                "alliance": false,
                "planning": false,
                "reveal": true,
                "resolution": false
            }
        }
    },
    {
        "id": "coward",
        "expansion": "Cosmic Eons",
        "name": {
            "pt": "Coward",
            "en": "Coward"
        },
        "aka": "Covarde",
        "summary": {
            "pt": "Retirar-se de Encontros",
            "en": "Withdraws From Encounters"
        },
        "power": {
            "pt": "<b>Você tem o poder de Fugir.</b> Como um jogador principal, depois das cartas de encontro serem escolhidas mas antes de serem reveladas, você <b>pode usar</b> este poder para fugir. Vá para a fase de Resolução. Seu oponente vence, suas naves e as naves dos seus aliados retornam para suas colônias e a sua fuga conta como um sucesso para você ao invés de uma derrota. Depois das cartas de encontro serem descartadas, você recebe uma recompensa para cada nave que o seu oponente tinha no encontro.",
            "en": "<b>You have the power to Flee.</b> As a main player, after encounter cards are selected but before they are revealed, you <b>may use</b> this power to flee. Proceed to the resolution phase. Your opponent wins, your ships and those of your allies return to other colonies, and your flight counts as a success for you rather than a loss. After encounter cards are discarded, you receive one reward for each ship your opponent had in the encounter."
        },
        "history": {
            "pt": "Cantando \"Fugir ou não fugir\", os Covardes recuam em seu caminho ao redor do universo, mantendo um olhar invejoso sobre uma possível dominação derradeira pelas portas dos fundos.",
            "en": "Chanting \"To flee or not to flee\", the Cowards retreat their way around the Universe, keeping a jaundiced eye on possible ultimate domination via the back door."
        },
        "flare": {
            "wild": {
                "pt": "Após as cartas de encontro serem selecionadas mas antes de serem reveladas, você pode fugir do seu encontro e contá-lo como um sucesso. Dê sua carta de encontro para a defesa. Retorne suas naves para suas colônias. A defesa descarta normalmente e suas naves permanecem no planeta. Todas as naves aliadas retornam para as colônias.",
                "en": "After encounter cards are selected but before they are revealed, you may flee from your encounter and count it as a success. Give your encounter card to the defense. Return your ships to your colonies. The defense discards normally and their ships remain on the planet. All ally ships return to colonies.",
                "timing": {
                    "player": {
                        "pt": "Apenas Ataque",
                        "en": "Offense Only"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": true,
                        "reveal": false,
                        "resolution": false
                    }
                }
            },
            "super": {
                "pt": "Quando você foge, antes que as cartas de encontro (e kickers, se houver) sejam viradas para cima para serem descartadas, você pode, em vez disso, examiná-las em particular e adicionar qualquer uma ou todas à sua mão, descartando o restante. Se você mantiver alguma dessas cartas, não receba recompensas por fugir.",
                "en": "When you flee, before encounter cards (and kickers, if any) are turned faceup to be discarded, you may instead privately examine them and add any or all to your hand, discarding the rest. If you keep any of those cards, do not receive rewards for fleeing.",
                "timing": {
                    "player": {
                        "pt": "Apenas Jogador Principal",
                        "en": "Main Player Only"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": false,
                        "reveal": false,
                        "resolution": true
                    }
                }
            }
        },
        "timing": {
            "player": {
                "pt": "Apenas Jogador Principal",
                "en": "Main Player Only"
            },
            "choice": {
                "pt": "Opcional",
                "en": "Optional"
            },
            "phases": {
                "startTurn": false,
                "regroup": false,
                "destiny": false,
                "launch": false,
                "alliance": false,
                "planning": true,
                "reveal": false,
                "resolution": false
            }
        }
    },
    {
        "id": "crusher",
        "expansion": "Cosmic Eons",
        "name": {
            "pt": "Crusher",
            "en": "Crusher"
        },
        "aka": "Esmagador",
        "summary": {
            "pt": "Reduz Naves para Um",
            "en": "Reduces Ships to One"
        },
        "power": {
            "pt": "<b>Preparação de Jogo:</b> Escolha uma cor de jogador não utilizada e coloque as 20 naves desta cor nesta ficha (16 se você estiver jogando com quatro palnetas por jogador) como naves esmagadoras. Não use este poder ao menos que você tenha uma cor de jogador não utilizada.<br/><br/><b>Você tem o poder de Esmagar.</b> Como um jogador principal, antes das cartas de encontro serem escolhidas, você <b>pode usar</b> este poder para esmagar as naves do outro jogador principal e os aliados dele ou dela. Para cada jogador afetado, empilhe as naves envolvidas dele ou dela e coloque uma de suas naves esmagadoras desta ficha no topo. Cada pilha é controlada por seu próprio dono e move e conta como apenas uma nave para todos os efeitos. Uma pilha não pode ter naves adicionadas ou removidas e não pode ser empilhada em alguma outra pilha.<br/><br/>Sempre que uma ou mais naves suas for para o warp, você <b>pode usar</b> este poder para escolher um outro jogador e esmagar todas as naves deste jogador para o warp que ainda não foram esmagadas.<br/><br/>Durante a fase de aliança, você <b>pode usar</b> este poder para liberar uma ou mais pilhas esmagadas em troca de qualquer coisa que os seus donos possam te oferecer como parte de um acordo e/ou em troca de seus donos concordarem em receber cartas de sua mão. As naves liberadas permanecem no lugar e as naves esmagadoras retornam para esta ficha.<br/><br/>Se esta ficha for perdida ou virada para baixo, todas as naves esmagadas são liberadas não importam onde estejam.",
            "en": "<b>Game Setup:</b> Choose one unused player color and place the 20 ships of that color on this sheet (16 if you are playing with four planets per player) as crusher ships. Do not use this power unless you have an unused player color.<br/><br/><b>You have the power to Crush.</b> As a main player, before encounter cards are selected, you <b>may use</b> this power to crush the ships of the other main player and his or her allies. For each affected player, stack his or her involved ships and place one of your crusher ships from this sheet on top. Each crushed stack is controlled by its owner, and moves and counts as a single ship in every way. A crushed stack may not have ships added to or removed from it and may not be re-crushed into another stack.<br/><br/>Whenever one or more of your ships go to the warp, you <b>may use</b> this power to choose one other player and crush all of that player's ships in the warp that are not already crushed.<br/><br/>During the alliance phase, you <b>may use</b> this power to release one or more crushed stacks in exchange for anything their owners could give you as part of a deal, and/or in exchange for their owners agreeing to receive cards from your hand. The released ships remain in place and the crusher ships return to this sheet.<br/><br/>If this sheet is lost or turned facedown, all crushed ships are released wherever they are."
        },
        "history": {
            "pt": "Os Esmagadores são simples e brutais com táticas diretas.",
            "en": "The Crushers are a simple, rather brutal race with straightforward tactics."
        },
        "flare": {
            "wild": {
                "pt": "Como jogador principal, após as cartas de encontro serem selecionadas mas antes de serem reveladas, você pode fazer com que as naves do seu oponente no encontro contem como apenas uma nave para totais de encontro, compensação e recompensas.",
                "en": "As a main player, after encounter cards are selected but before they are revealed, you may make your opponent's ships in the encounter count as just one ship for encounter totals, compensation, and rewards.",
                "timing": {
                    "player": {
                        "pt": "Apenas Jogador Principal",
                        "en": "Main Player Only"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": true,
                        "reveal": false,
                        "resolution": false
                    }
                }
            },
            "super": {
                "pt": "Ao perder naves para o warp, cada nave que você perde pode esmagar as naves não esmagadas de um jogador diferente no warp.",
                "en": "When losing ships to the warp, each ship you lose may crush a different player's uncrushed ships in the warp.",
                "timing": {
                    "player": {
                        "pt": "Como Qualquer Jogador",
                        "en": "As Any Player"
                    },
                    "phases": {
                        "startTurn": true,
                        "regroup": true,
                        "destiny": true,
                        "launch": true,
                        "alliance": true,
                        "planning": true,
                        "reveal": true,
                        "resolution": true
                    }
                }
            }
        },
        "timing": {
            "player": {
                "pt": "Como Qualquer Jogador",
                "en": "As Any Player"
            },
            "choice": {
                "pt": "Opcional",
                "en": "Optional"
            },
            "phases": {
                "startTurn": true,
                "regroup": true,
                "destiny": true,
                "launch": true,
                "alliance": true,
                "planning": true,
                "reveal": true,
                "resolution": true
            }
        }
    },
    {
        "id": "emperor",
        "expansion": "Cosmic Eons",
        "name": {
            "pt": "Emperor",
            "en": "Emperor"
        },
        "aka": "Imperador",
        "summary": {
            "pt": "Demanda Tributo",
            "en": "Demands Tribute"
        },
        "power": {
            "pt": "<b>Você tem o poder do Tributo.</b> Toda vez que um outro jogador envia uma ou mais naves em um encontro para o seu sistema ou ganha uma colônia no seu sistema, você <b>pode usar</b> este poder para demandar um tributo. Aquele jogador deve dar a você uma carta da mão dele ou dela e também deve dar a você uma das naves dele ou dela de uma colônia. Coloque a carta virada para baixo nesta ficha e coloque a nave no topo da carta como um lembrete do dono. O jogador pode recusar se ele ou ela já tiver dado a você um tributo durante este encontro.<br/><br/>No final de qualquer encontro, desde que haja três ou mais tributos nesta ficha de pelo menos dois jogadores diferentes, você pode olhar todos os tributos. Adicione os tributos que você considera valiosos para sua mão e descarte aqueles que você não considera valiosos. Você pode retornar um dos tributos não valiosos para o doador, fazendo com que aquele jogador perca três naves para o warp. Então, a nave do doador nesta ficha retorna para qualquer colônia do doador.",
            "en": "<b>You have the power of Tribute.</b> Each time another player sends one or more ships into an encounter in your system or gains a colony in your system, you <b>may use</b> this power to demand a tribute. That player must give you one card from his or her hand and must also give you one of his or her ships from a colony. Place the card facedown on this sheet and put the ship on top of the card as an owner ID. The player may refuse if he or she has already given you a tribute during this encounter.<br/><br/>At the end of any encounter, as long as there are three or more total tributes on this sheet from at least two different players, you may look at all of them. Add the tributes you consider worthy to your hand and discard those you consider unworthy. You may return one of the unworthy tributes to its giver, causing that player to lose three ships to the warp. Then the ID ships return to any of their owners' colonies."
        },
        "history": {
            "pt": "Os magistrados egoístas da raça do Imperador exigem respeito acima de tudo. Raramente os presentes atraem muitos favores desses narcisistas, mas uma oferta atraente feita em um espírito fingido de deferência pode muitas vezes afastar a ira, mesmo que brevemente.",
            "en": "The egotistical magistrates of the Emperor race demand respect above all else. Rarely do gifts curry much favor with these narcissists, but an enticing offering made in a feigned spirit of deference can often turn away wrath, if only briefly."
        },
        "flare": {
            "wild": {
                "pt": "Quando um jogador principal se recusa a convidá-lo para se aliar, você pode mostrar a ele uma carta da sua mão para reconsiderar. Se esse jogador o convidar, ele decide qual de vocês deve ficar com a carta. Se ele não o fizer, então você decide qual de vocês deve ficar com a carta.",
                "en": "When a main player declines to invite you to ally, you may show them a card from your hand to reconsider. If that player invites you, then they decide which of you must keep the card. If they do not, then you decide which of you must keep the card.",
                "timing": {
                    "player": {
                        "pt": "Não Jogador Principal ou Aliado",
                        "en": "Not Main Player or Ally"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": true,
                        "planning": false,
                        "reveal": false,
                        "resolution": false
                    }
                }
            },
            "super": {
                "pt": "Ao usar seu poder, você pode exigir uma carta de encontro, uma carta que não seja de encontro, uma carta de um tipo específico ou uma carta específica pelo nome. O outro jogador deve atender à sua exigência, se possível. (Se não, ele oferece qualquer carta normalmente.)",
                "en": "When using your power, you may demand an encounter card, a non-encounter card, a card of one particular type, or a specific card by name. The other player must meet your demand if possible. (If not, then they offer any card normally.)",
                "timing": {
                    "player": {
                        "pt": "Como Qualquer Jogador",
                        "en": "As Any Player"
                    },
                    "phases": {
                        "startTurn": true,
                        "regroup": true,
                        "destiny": true,
                        "launch": true,
                        "alliance": true,
                        "planning": true,
                        "reveal": true,
                        "resolution": true
                    }
                }
            }
        },
        "timing": {
            "player": {
                "pt": "Como Qualquer Jogador",
                "en": "As Any Player"
            },
            "choice": {
                "pt": "Opcional",
                "en": "Optional"
            },
            "phases": {
                "startTurn": true,
                "regroup": true,
                "destiny": true,
                "launch": true,
                "alliance": true,
                "planning": true,
                "reveal": true,
                "resolution": true
            }
        }
    },
    {
        "id": "evil_twin",
        "expansion": "Cosmic Eons",
        "name": {
            "pt": "Evil Twin",
            "en": "Evil Twin"
        },
        "aka": "Gêmeo Mau",
        "summary": {
            "pt": "Evita Penalidades",
            "en": "Avoids Penalties"
        },
        "power": {
            "pt": "<b>Você tem o poder de Acusar.</b> Como um jogador principal, depois que o atacante lança naves, você <b>pode usar</b> este poder para declarar qualquer outro jogador exceto o seu oponente como o seu gêmeo bom dando a ele ou ela um marcador de gêmeo. Até a próxima vez que uma carta de destino for comprada, perdas e penalidades sofridas por você devem ser sofridas pelo seu gêmeo bom ao invés de você. Então o seu marcador de gêmeo volta para esta ficha.<br/><br/>Perdas e penalidades incluem cartas da sua mão que deveriam ser descartadas, cartas que você deveria dar a outro jogador (outro que não o seu gêmeo bom), e naves que deveriam ir para o warp. Além disso, cartas de essence como tíquetes, traumas e sonhos ruins dadas a você são passadas para o seu gêmeo bom. Quando você perde uma colônia, seu gêmeo bom perde um número de naves que você tinha na colônia para o warp. Suas naves que deveriam ser perdidas retornam para as suas colônias se possível, senão, elas permanecem na colônia.",
            "en": "<b>You have the power to Blame.</b> As a main player, after the offense launches ships, you <b>may use</b> this power to declare any other player except your opponent as your good twin by giving him or her a twin token. Until the next time destiny is drawn, losses and penalties suffered by you must instead be suffered by your good twin. Then your twin token is returned to this sheet.<br/><br/>Losses and penalties include cards from your hand which are supposed to be discarded, cards which you must give to another player (other than your good twin), and ships which are supposed to go to the warp. Also, essence card penalties such as tickets, traumas, and bad dreams given to you are passed on to your good twin. When you lose a colony, your good twin loses the number of ships you had on the colony to the warp. Your ships which would have been lost return to your other colonies if possible. Otherwise, they remain on the colony."
        },
        "history": {
            "pt": "Em um mundo onde todos são gêmeos, não demorou muito para que os poderosos gêmeos do mal começassem a se esquivar da responsabilidade. Os ETs ficam mais fortes à medida que GTs rejeitados normalmente assumem a culpa injustamente.",
            "en": "On a world where all are twins, it was not long before the powerful evil twins began dodging responsibility. ETs grow stronger as cast-off GTs habitually shoulder wrongful blame."
        },
        "flare": {
            "wild": {
                "pt": "Quando você deve enviar naves para o warp ou perder cartas para compensação, desde que você não seja atualmente um gêmeo bom para o Gêmeo Maligno, você pode forçar o jogador à sua esquerda a sofrer a perda do mesmo número de naves ou cartas, se possível, em vez de você. Dê esta flare a esse jogador após o uso.",
                "en": "When you must send ships to the warp or lose cards to compensation, as long as you are not currently a good twin to the Evil Twin, you may force the player to your left to suffer the loss of the same number of ships or cards, if possible, instead of you. Give this flare to that player after use.",
                "timing": {
                    "player": {
                        "pt": "Como Qualquer Jogador",
                        "en": "As Any Player"
                    },
                    "phases": {
                        "startTurn": true,
                        "regroup": true,
                        "destiny": true,
                        "launch": true,
                        "alliance": true,
                        "planning": true,
                        "reveal": true,
                        "resolution": true
                    }
                }
            },
            "super": {
                "pt": "Você pode se tornar trigêmeos dando fichas de gêmeos a dois outros jogadores, mesmo que um seja seu oponente. Cada um dos seus dois gêmeos bons sofre simultaneamente cada perda ou penalidade inteira que teria sido sofrida por você. Ambas as fichas retornam à sua ficha no próximo sorteio de destino.",
                "en": "You may become triplets by giving twin tokens to two other players, even if one is your opponent. Each of your two good twins simultaneously suffers each entire loss or penalty which would have been suffered by you. Both tokens return to your sheet on the next destiny draw.",
                "timing": {
                    "player": {
                        "pt": "Apenas Jogador Principal",
                        "en": "Main Player Only"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": false,
                        "launch": true,
                        "alliance": false,
                        "planning": false,
                        "reveal": false,
                        "resolution": false
                    }
                }
            }
        },
        "timing": {
            "player": {
                "pt": "Apenas Jogador Principal",
                "en": "Main Player Only"
            },
            "choice": {
                "pt": "Opcional",
                "en": "Optional"
            },
            "phases": {
                "startTurn": false,
                "regroup": false,
                "destiny": false,
                "launch": true,
                "alliance": false,
                "planning": false,
                "reveal": false,
                "resolution": false
            }
        }
    },
    {
        "id": "fire_dancer",
        "expansion": "Cosmic Eons",
        "name": {
            "pt": "Fire Dancer",
            "en": "Fire Dancer"
        },
        "aka": "Dançarino do Fogo",
        "summary": {
            "pt": "Bloqueia Acessos",
            "en": "Blocks Access"
        },
        "power": {
            "pt": "<b>Você tem o poder de Intimidar.</b> Como um jogador principal, quando você revela uma carta de ataque e não há um marcador de fogo no sistema alvo, você <b>pode usar</b> este poder para colocar um marcador de fogo naquele sistema. No final daquele encontro, todas as cartas de ataque reveladas são colocadas viradas para cima embaixo do novo marcador de fogo como combustível ao invés de serem descartas (independente de outros efeitos de jogo como o poder do Clone).<br/><br/>Quando você não for um jogador principal, depois da carta de destino ser comprada, você pode oferecer em criar ou expandir um fogo no sistema alvo, e a defesa pode oferecer a você qualquer coisa que ele ou ela possa dar a você como parte de um acordo. Você <b>pode usar</b> este poder para aceitar a oferta. Se o sistema alvo ainda não tiver um marcador de fogo, coloque um lá. Então, você e o defensor podem cada um colocar uma carta de ataque da sua mão virada para cima embaixo daquele marcador de fogo novo ou existente como combustível.<br/><br/>Sempre que ambos os lados em um encontro revelam cartas de ataque em um sistema com um marcador de fogo, ao menos que você seja o atacante ou um aliado defensivo, o número na face de cada carta de combustível é adicionado ao total da defesa. No final do encontro, o fogo adicionado ao total da defesa é extinto e o marcador de fogo e as cartas de combustível são descartadas. Se esta ficha for perdida ou virada para baixo, todos os seus fogos são extintos.",
            "en": "<b>You have the power to Awe.</b> As a main player, when you reveal an attack card and there is no fire token in the targeted system, you <b>may use</b> this power to place a fire token in that system. At the end of that encounter, all attack cards revealed are placed faceup under the new fire token as fuel instead of being discarded (regardless of other game effects such as the Clone's power).<br/><br/>When you are not a main player, after destiny is drawn, you may offer to create or expand a fire in the targeted system, and the defense may offer you anything he or she could give you as part of a deal to do so. you <b>may use</b> this power to accept the offer. If the targeted system does not already have a fire token, place one there. Then, you and the defense may each place one attack card from your hand faceup under that system's new or existing fire token as fuel.<br/><br/>Whenever both sides in an encounter reveal attack cards in a system with a fire token, unless you are the offense or an offensive ally, the face value number showing on each fuel card is added to the defense's total. At the end of the encounter, a fire which added to the defense's total is extinguished, and the fire token and fuel cards are discarded. If this sheet is lost or turned facedown, all of your fires are extinguished."
        },
        "history": {
            "pt": "Os Dançarinos do Fogo despertam um sentimento de admiração ao apresentar sua forma de arte cultural para outros que competem para ser o próximo patrocinador de sua performance mágica.",
            "en": "The Fire Dancers stir a sense of awe by performing their cultural art form for others who compete to be the next sponsor of their magical performance."
        },
        "flare": {
            "wild": {
                "pt": "Após o portal do hiperespaço ser apontado, você pode forçar o ataque a apontar o portal para um planeta diferente no sistema alvo onde eles possam ter um encontro legal contra a defesa.",
                "en": "After the hyperspace gate is aimed, you may force the offense to aim the gate at a different planet in the targeted system where they can have a legal encounter against the defense.",
                "timing": {
                    "player": {
                        "pt": "Como Qualquer Jogador",
                        "en": "As Any Player"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": false,
                        "launch": true,
                        "alliance": false,
                        "planning": false,
                        "reveal": false,
                        "resolution": false
                    }
                }
            },
            "super": {
                "pt": "No início do seu turno, você pode colocar uma carta de ataque da sua mão virada para cima sob uma de suas fichas de fogo.",
                "en": "At the start of your turn, you may place one attack card from your hand faceup underneath one of your fire tokens.",
                "timing": {
                    "player": {
                        "pt": "Apenas Ataque",
                        "en": "Offense Only"
                    },
                    "phases": {
                        "startTurn": true,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": false,
                        "reveal": false,
                        "resolution": false
                    }
                }
            }
        },
        "timing": {
            "player": {
                "pt": "Como Qualquer Jogador",
                "en": "As Any Player"
            },
            "choice": {
                "pt": "Opcional",
                "en": "Optional"
            },
            "phases": {
                "startTurn": false,
                "regroup": false,
                "destiny": true,
                "launch": false,
                "alliance": false,
                "planning": false,
                "reveal": true,
                "resolution": false
            }
        }
    },
    {
        "id": "hunger",
        "expansion": "Cosmic Eons",
        "name": {
            "pt": "Hunger",
            "en": "Hunger"
        },
        "aka": "Fome",
        "summary": {
            "pt": "Alimenta-se das Mãos de Outros",
            "en": "Feeds on Others' Hands"
        },
        "power": {
            "pt": "<b>Você tem o poder de uma Ajuda Extra.</b> No início do seu turno, <b>use</b> este poder para pegar uma carta aleatória da mão de cada outro jogador.<br/><br/>No início do turno de cada outro jogador, <b>use</b> este poder para pegar uma carta aleatória da mão daquele jogador.",
            "en": "<b>You have the power of Extra Helpings.</b> At the start of your turn, <b>use</b> this power to take one card at random from each other player's hand.<br/><br/>At the start of each other player's turn, <b>use</b> this power to take one card at random from that player's hand."
        },
        "history": {
            "pt": "Evoluindo como criaturas perpetuamente famintas em um planeta com água, flora e fauna limitadas, a Fome se tornou adepta de maximizar as oportunidades de aproveitar e explorar todas as fontes possíveis de sustento. Agora eles estão enviando suas naves para o Cosmos em missões de coleta e esperam obter alimento de vizinhos crédulos e planetas férteis e mal protegidos.",
            "en": "Evolving as perpetually ravenous creatures on a planet with limited water, flora, and fauna, the Hunger grew adept at maximizing opportunities to seize and exploit all possible sources of sustenance. Now they are sending their ships out into the Cosmos on foraging missions and hope to gather nourishment from gullible neighbors and fertile, poorly protected planets."
        },
        "flare": {
            "wild": {
                "pt": "Como jogador principal, antes das cartas de encontro serem selecionadas, você pode revelar a carta do topo do baralho cósmico ou do baralho de recompensas. Descarte essa carta e fique com esta flare, ou fique com essa carta e dê esta flare ao Fome (ou descarte-a, se o Fome não estiver jogando).",
                "en": "As a main player, before encounter cards are selected, you may reveal the top card of the cosmic deck or the reward deck. Either discard that card and keep this flare, or keep that card and give this flare to the Hunger (or discard it, if the Hunger isn't playing).",
                "timing": {
                    "player": {
                        "pt": "Apenas Jogador Principal",
                        "en": "Main Player Only"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": true,
                        "reveal": false,
                        "resolution": false
                    }
                }
            },
            "super": {
                "pt": "Ao usar seu poder no início do turno de outro jogador, você pode pegar até duas cartas desse jogador. Cada carta pega pode ser mantida, descartada, devolvida ou dada a qualquer outro jogador.",
                "en": "When using your power at the start of another player's turn, you may take up to two cards from that player. Each card taken may be kept, discarded, returned, or given to any other player.",
                "timing": {
                    "player": {
                        "pt": "Não Ataque",
                        "en": "Not Offense"
                    },
                    "phases": {
                        "startTurn": true,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": false,
                        "reveal": false,
                        "resolution": false
                    }
                }
            }
        },
        "timing": {
            "player": {
                "pt": "Como Qualquer Jogador",
                "en": "As Any Player"
            },
            "choice": {
                "pt": "Obrigatório",
                "en": "Mandatory"
            },
            "phases": {
                "startTurn": true,
                "regroup": false,
                "destiny": false,
                "launch": false,
                "alliance": false,
                "planning": false,
                "reveal": false,
                "resolution": false
            }
        }
    },
    {
        "id": "hypochondriac",
        "expansion": "Cosmic Eons",
        "name": {
            "pt": "Hypochondriac",
            "en": "Hypochondriac"
        },
        "aka": "Hipocondríaco",
        "summary": {
            "pt": "Compartilha Ansiedade",
            "en": "Shares Anxiety"
        },
        "power": {
            "pt": "<b>Preparação de Jogo:</b> Para cada outro jogador em jogo, coloque dois marcadores de ansiedade nesta ficha (ex.: oito marcadores em um jogo com cinco jogadores).<br/><br/><b>Você tem o poder da Ansiedade.</b> Como um jogador principal ou aliado, durante a fase de planejamento, você <b>pode usar</b> este poder para nomear um outro jogador principal ou aliado que te deixa ansioso (por qualquer razão). Explique o porque e procure um remédio. Independente de quem te deixa ansioso, quaisquer jogador ou jogadores podem individualmente ou em conjunto oferecer a você um remédio de qualquer tipo que eles possam dar a você como parte de um acordo e/ou abandonando qualquer uma das colônias deles (retornando as naves para outras colônias). Você tem um minuto para either aceitar um remédio ou dar ao jogador nomeado um de seus marcadores de ansiedade.<br/><br/>No final de qualquer encontro que tenha um vencedor e um perdedor, o vencedor pode entregar metade de seus marcadores de ansiedade (arredondado para cima) para o perdedor mas pode entregar somente um se o perdedor for você. Marcadores de ansiedade podem ser negociados em acordos.<br/><br/>O jogador ou jogadores que tenham mais marcadores de ansiedade (inclusive você) não podem aterrisar suas naves em um planeta se estabelecer essa colônia fizer com que aquele jogador vença o jogo. Estas naves retornam para outras colônias.",
            "en": "<b>Game Setup:</b> For each other player in the game, place two anxiety tokens on this sheet (e.g., eight tokens in a five-player game).<br/><br/><b>You have the power of Anxiety.</b> As a main player or ally, during the planning phase, you <b>may use</b> this power to name one other main player or ally who makes you anxious (for any reason). Explain why and seek a remedy. Regardless of who's making you anxious, any player or players may, individually or together, offer you a remedy of anything they could give you as part of a deal and/or abandoning any of their colonies (returning the ships to other colonies). You have one minute to either accept one remedy or give the named player one of your anxiety tokens.<br/><br/>At the end of any encounter that has a winner and a loser, the winner may give up to half of his or her anxiety tokens (rounded up) to the loser, but may give only one if the loser is you. Anxiety tokens may also be traded in deals.<br/><br/>The player or players who have the most anxiety tokens (even you) cannot land their ships on a planet if establishing that colony would win them the game. Those ships return to other colonies."
        },
        "history": {
            "pt": "Levando a autopiedade e a hipersensibilidade a um novo nível, os Hipocondríacos estão entrando nas pontas dos pés nos reinos do espaço profundo para tossir nos rostos das massas cósmicas.",
            "en": "Parlaying self-pity and hypersensitivity to a new level, the Hypochondriacs are tiptoeing into the realms of deep space to cough in the faces of the Cosmic masses."
        },
        "flare": {
            "wild": {
                "pt": "A qualquer momento, você pode colocar esta carta na frente do seu sistema e declarar-se 'não estar em casa'. Enquanto esta carta estiver na frente do seu sistema, nenhum outro jogador pode apontar o portal do hiperespaço para um de seus planetas natais. O destino é sorteado novamente conforme necessário. No início do seu próximo turno, dê esta flare ao Hipocondríaco (ou descarte-a, se o Hipocondríaco não estiver jogando).",
                "en": "At any time, you may place this card in front of your system and declare yourself \"not at home.\" While this card is in front of your system, no other player may aim the hyperspace gate at one of your home planets. Destiny is drawn again as necessary. At the start of your next turn, give this flare to the Hypochondriac (or discard it, if the Hypochondriac isn't playing).",
                "timing": {
                    "player": {
                        "pt": "Como Qualquer Jogador",
                        "en": "As Any Player"
                    },
                    "phases": {
                        "startTurn": true,
                        "regroup": true,
                        "destiny": true,
                        "launch": true,
                        "alliance": true,
                        "planning": true,
                        "reveal": true,
                        "resolution": true
                    }
                }
            },
            "super": {
                "pt": "Você pode ficar ansioso duas vezes por encontro, mas não sobre a mesma pessoa.",
                "en": "You may be anxious twice per encounter, but not about the same person.",
                "timing": {
                    "player": {
                        "pt": "Apenas Jogador Principal ou Aliado",
                        "en": "Main Player or Ally Only"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": true,
                        "reveal": false,
                        "resolution": false
                    }
                }
            }
        },
        "timing": {
            "player": {
                "pt": "Apenas Jogador Principal ou Aliado",
                "en": "Main Player or Ally Only"
            },
            "choice": {
                "pt": "Opcional",
                "en": "Optional"
            },
            "phases": {
                "startTurn": false,
                "regroup": false,
                "destiny": false,
                "launch": false,
                "alliance": false,
                "planning": true,
                "reveal": false,
                "resolution": false
            }
        }
    },
    {
        "id": "klutz",
        "expansion": "Cosmic Eons",
        "name": {
            "pt": "Klutz",
            "en": "Klutz"
        },
        "aka": "Tonto",
        "summary": {
            "pt": "Derruba Cartas e Naves",
            "en": "Fumbles Cards and Ships"
        },
        "power": {
            "pt": "<b>Você tem o poder de Ser Desajeitado.</b> Sempre que você compra mais do que uma carta do baralho (incluindo quando você recebe sua mão inicial), <b>use</b> este poder para derrubar uma ou duas das cartas compradas. As cartas derrubadas são descartadas sem reposição.<br/><br/>Sempre que você coloca uma ou mais de suas naves no mesmo planeta, <b>use</b> este poder para examinar qualquer outra nave no planeta no mesmo sistema próximo ao planeta que você está colocando naves. Derrube-a. A nave derrubada vai para o warp.",
            "en": "<b>You have o poder de Clumsiness.</b> Whenever you draw more than one card from the deck (including when you are dealt your starting hand), <b>use</b> this power to drop one or two of the drawn cards. The dropped cards are discarded without replacement.<br/><br/>Whenever you place more than one of your ships on the same planet, <b>use</b> this power to examine any one other ship on a planet in the same system next to the planet you are placing ships on. Then drop it. The dropped ship goes to the warp."
        },
        "history": {
            "pt": "Os Desastrados são descritos por seus vizinhos cósmicos como sendo todos joinhas e isso significa literalmente. Não possuindo dedos e apenas polegares marginalmente opostos, é uma maravilha que eles possam até amarrar seus próprios podpads. A reprodução dos Desastrados é portanto, hipotetizada como ocorrendo por meio de um fenômeno que passou a ser chamado de \"colisões improváveis​de sorte\".",
            "en": "The Klutzes are described by their Cosmic neighbors as being all thumbs, and this is meant quite literally. Possessing no fingers and only marginally opposable thumblets, it is a wonder they can even tie their own podpads. Klutz reproduction is thus hypothesized to occur via a phenomenon that has come to be called \"improbably fortunate collisions.\""
        },
        "flare": {
            "wild": {
                "pt": "Pelo resto deste encontro, cada vez que outro jogador tiver que comprar mais de uma carta do baralho, você pode distribuir as cartas desse jogador. Dê uma carta virada para cima para esse jogador, dê uma carta para o oponente errado, ou faça ambos (com a mesma carta ou duas diferentes).",
                "en": "For the rest of this encounter, each time another player should draw more than one card from the deck, you may deal out that player's cards. Deal one card faceup to that player, deal one card to the wrong opponent, or do both (with the same card or two different ones).",
                "timing": {
                    "player": {
                        "pt": "Como Qualquer Jogador",
                        "en": "As Any Player"
                    },
                    "phases": {
                        "startTurn": true,
                        "regroup": true,
                        "destiny": true,
                        "launch": true,
                        "alliance": true,
                        "planning": true,
                        "reveal": true,
                        "resolution": true
                    }
                }
            },
            "super": {
                "pt": "Como jogador principal ou aliado perdedor, em vez de enviar suas naves perdedoras para o warp, você pode pegá-las. Após as outras naves serem resolvidas, solte as suas como um grupo de uma altura de um pé acima do planeta alvo. As naves de todos os jogadores que acabarem tocando ou sobrepondo quaisquer planetas permanecem nesses planetas. Naves que quicarem para longe de todos os planetas vão para o warp.",
                "en": "As a losing main player or ally, instead of sending your losing ships to the warp you may pick them up. After the other ships are resolved, drop yours as a group from a height of one foot above the targeted planet. All players' ships that end up touching or overlapping any planets stay on those planets. Ships that bounce away from all planets go to the warp.",
                "timing": {
                    "player": {
                        "pt": "Apenas Jogador Principal ou Aliado",
                        "en": "Main Player or Ally Only"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": false,
                        "reveal": false,
                        "resolution": true
                    }
                }
            }
        },
        "timing": {
            "player": {
                "pt": "Como Qualquer Jogador",
                "en": "As Any Player"
            },
            "choice": {
                "pt": "Obrigatório",
                "en": "Mandatory"
            },
            "phases": {
                "startTurn": true,
                "regroup": true,
                "destiny": true,
                "launch": true,
                "alliance": true,
                "planning": true,
                "reveal": true,
                "resolution": true
            }
        }
    },
    {
        "id": "maven",
        "expansion": "Cosmic Eons",
        "name": {
            "pt": "Maven",
            "en": "Maven"
        },
        "aka": "Sabichão",
        "summary": {
            "pt": "Está Sempre Certo",
            "en": "Is Always Right"
        },
        "power": {
            "pt": "<b>Você tem o poder de Estar Certo.</b> Se você não é um jogador principal ou aliado, depois das cartas de encontro serem escolhidas mas antes de serem reveladas, você <b>pode usar</b> este poder para pegar todas as cartas jogadas durante a fase de planejamento viradas para baixo e empilhá-las nesta ficha sem olhar. Então prossiga para a fase de revelação e descarte uma carta de ataque ou negociação da sua mão para declarar o resultado do encontro. Descarte uma carta de ataque com número par para declarar que o atacante venceu. Descarte uma carta de ataque com número ímpar para declarar que o defensor venceu. Descarte uma carta de negociação para declarar que os jogadores principais tentarão fechar um acordo. Você não pode <b>use</b> este poder se você não tem uma carta de ataque ou negociação para descartar.<br/><br/>Cartas que você empilhou nesta ficha são mantidas viradas para baixo até o baralho apropriado ser embaralho e nessa hora, estas cartas serão embaralhadas no baralho.",
            "en": "<b>You tem o poder de Be Right.</b> If you are not a main player or ally, after encounter cards are selected but before they are revealed, you <b>may use</b> this power to take all facedown cards played during the planning phase and stack them on this sheet without looking at them. Then proceed to the reveal phase and discard an attack or negotiate card from your hand to declare the outcome of the encounter. Discard an even-numbered attack card to declare that the offense wins. Discard an odd-numbered attack card to declare that the defense wins. Discard a negotiate card to declare that the main players will try to make a deal. You may not <b>use</b> this power if you do not have an attack or negotiate card to discard.<br/><br/>Cards you stack on this sheet are kept facedown until the appropriate deck is reshuffled, at which point they are reshuffled with that deck."
        },
        "history": {
            "pt": "Cansados de oferecer correções para espécies menores, os Sabichões decidiram pular o alien do meio, por assim dizer, e se apressar para o final do jogo, declarando resultados corretos em questão de segundos.",
            "en": "Tired of offering corrections to lesser species, the Mavens have decided to skip the middle-alien, as it were, and hasten to the endgame, declaring correct outcomes in a matter of seconds."
        },
        "flare": {
            "wild": {
                "pt": "Quando você não estiver envolvido em um encontro, após as cartas de encontro serem reveladas, você pode 'corrigir' o resultado de qualquer encontro adicionando 10 ao total de qualquer um dos lados. Dê esta flare ao Maven após o uso (ou descarte-a, se o Maven não estiver jogando).",
                "en": "When you are not involved in an encounter, after encounter cards are revealed, you may \"correct\" any encounter's outcome by adding 10 to either side's total. Give this flare to the Maven after use (or discard it, if the Maven isn't playing).",
                "timing": {
                    "player": {
                        "pt": "Não Jogador Principal ou Aliado",
                        "en": "Not Main Player or Ally"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": false,
                        "reveal": true,
                        "resolution": false
                    }
                }
            },
            "super": {
                "pt": "Ao usar seu poder, em vez de colocar cartas em sua ficha de alienígena, você pode adicionar todas elas à sua mão.",
                "en": "When using your power, instead of placing cards on your alien sheet, you may add them all to your hand.",
                "timing": {
                    "player": {
                        "pt": "Não Jogador Principal ou Aliado",
                        "en": "Not Main Player or Ally"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": true,
                        "reveal": false,
                        "resolution": false
                    }
                }
            }
        },
        "timing": {
            "player": {
                "pt": "Não Jogador Principal ou Aliado",
                "en": "Not Main Player or Ally"
            },
            "choice": {
                "pt": "Opcional",
                "en": "Optional"
            },
            "phases": {
                "startTurn": false,
                "regroup": false,
                "destiny": false,
                "launch": false,
                "alliance": false,
                "planning": true,
                "reveal": false,
                "resolution": false
            }
        }
    },
    {
        "id": "moocher",
        "expansion": "Cosmic Eons",
        "name": {
            "pt": "Moocher",
            "en": "Moocher"
        },
        "aka": "Errante",
        "summary": {
            "pt": "Se Intromete",
            "en": "Intrudes"
        },
        "power": {
            "pt": "<b>Você tem o poder de Entrar.</b> Se você perder ou falhar em negociar no primeiro encontro do seu turno, depois do encontro, você <b>pode usar</b> este poder. Coloque um marcador vazio ou não utilizado de sofá em qualquer sistema que não seja aquele que você perdeu. Então, coloque de uma a quatro de suas naves de suas colônias nele. Sofás são tratados como planetas no sistema onde eles agora existem.<br/><br/>Quando o atacante não convida você para aliar e você tem quaisquer sofás colônia no sistema dele ou dela, você <b>pode usar</b> este poder para gritar \"Eu vou na frente!\" O atacante deve permitir que você se alie com uma quatro naves destes sofás colônia ou deixar que você pegue uma carta aleatória da mão dele ou dela.",
            "en": "<b>You have the power to Barge In.</b> If you lose or fail to deal on the first encounter of your turn, after the encounter you <b>may use</b> this power. Place any empty or unused couch token in any system other than the one in which you lost. Then place one to four of your ships on it from your colonies. Couches are treated as planets in the system where they now exist.<br/><br/>When the offense does not invite you to ally and you have any couch colonies in his or her system, you <b>may use</b> this power to call \"shotgun!\" The offense must either let you ally with 1 to 4 ships from those couch colonies, or let you take a card at random from his or her hand."
        },
        "history": {
            "pt": "\"Ei, nós dois temos vários olhos. Devo ser seu terceiro sobrinho perdido.\"",
            "en": "\"Hey, we both have multiple eyes. I must be your long lost third nephew once removed.\""
        },
        "flare": {
            "wild": {
                "pt": "Como jogador principal, após o ataque lançar naves, você pode usar este poder para gritar 'carona!'. O ataque deve deixar você se aliar com 1 a 4 naves de suas colônias no sofá, ou deixar você pegar uma carta aleatória da mão dele.",
                "en": "As a main player, after the offense launches ships, you may use this power to call \"shotgun!\" The offense must either let you ally with 1 to 4 ships from your couch colonies, or let you take a card at random from his or her hand.",
                "timing": {
                    "player": {
                        "pt": "Apenas Ataque",
                        "en": "Offense Only"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": true,
                        "launch": false,
                        "alliance": false,
                        "planning": false,
                        "reveal": false,
                        "resolution": false
                    }
                }
            },
            "super": {
                "pt": "Como aliado, você pode usar este poder para gritar 'carona!'. O ataque deve deixar você se aliar com 1 a 4 naves de suas colônias no sofá, ou deixar você pegar uma carta aleatória da mão dele.",
                "en": "As an ally, you may use your power to call \"shotgun!\" The offense must either let you ally with 1 to 4 ships from your couch colonies, or let you take a card at random from his or her hand.",
                "timing": {
                    "player": {
                        "pt": "Não Jogador Principal ou Aliado",
                        "en": "Not Main Player or Ally"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": true,
                        "planning": false,
                        "reveal": false,
                        "resolution": false
                    }
                }
            }
        },
        "timing": {
            "player": {
                "pt": "Não Defesa ou Aliado",
                "en": "Not Defense or Ally"
            },
            "choice": {
                "pt": "Opcional",
                "en": "Optional"
            },
            "phases": {
                "startTurn": false,
                "regroup": false,
                "destiny": false,
                "launch": false,
                "alliance": true,
                "planning": false,
                "reveal": false,
                "resolution": true
            }
        }
    },
    {
        "id": "multitude",
        "expansion": "Cosmic Eons",
        "name": {
            "pt": "Multitude",
            "en": "Multitude"
        },
        "aka": "Multidão",
        "summary": {
            "pt": "Cresce Exponencialmente",
            "en": "Grows Exponentially"
        },
        "power": {
            "pt": "<b>Você tem o poder da Exponenciação.</b> Sempre que não há marcadores cósmicos nesta ficha, coloque um no fator de crescimento exponencial x1.<br/><br/>Sempre que sua cor ou qualquer carta de destino especial é comprada do baralho de destino, <b>use</b> este poder para dobrar o seu fator de crescimento exponencial (movendo o marcador de x1 para x2, de x2 para x4, etc.).<br/><br/>Sempre que uma carta de destino coringa é comprada do baralho de destino, <b>use</b> este poder para reiniciar seu fator de crescimento exponencial para x1.<br/><br/>Como um jogador principal ou aliado, o valor de cada uma de suas naves participando em um encontro é multiplicada pelo fator de crescimento exponencial quando contando para o total do seu lado.",
            "en": "<b>You have the power of Exponentiation.</b> Whenever there are no cosmic tokens on this sheet, place one on the ?1 exponential growth factor.<br/><br/>Whenever your color or any special destiny card is drawn from the destiny deck, <b>use</b> this power to double your exponential growth factor (by moving the token from ?1 to ?2, from ?2 to ?4, etc.).<br/><br/>Whenever a wild destiny card is drawn from the destiny deck, <b>use</b> this power to reset your exponential growth factor to ?1.<br/><br/>As a main player or ally, the value of each of your ships participating in the encounter is multiplied by your exponential growth factor when counting toward your side's total"
        },
        "history": {
            "pt": "Depois de descobrir segredos para regenerar membros individuais de sua espécie e descobrir que não estavam dispostos a fazer escolhas sobre as quais eles não deveriam permanecer vivos para sempre, a Multidão agora está fervendo no espaço, procurando novos lugares para viver suas muitas vidas.",
            "en": "After discovering secrets for regenerating individual members of their species, and finding that they were unwilling to make choices about which of them should not stay alive forever, the Multitude are now boiling out into space, seeking new places to live out their many lives."
        },
        "flare": {
            "wild": {
                "pt": "Como jogador principal ou aliado, o valor de cada uma de suas naves participando do encontro é multiplicado pelo seu fator de crescimento exponencial ao contar para o total do seu lado.",
                "en": "As a main player or ally, the value of each of your ships participating in the encounter is multiplied by your exponential growth factor when counting toward your side's total.",
                "timing": {
                    "player": {
                        "pt": "Apenas Aliado",
                        "en": "Ally Only"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": false,
                        "reveal": true,
                        "resolution": false
                    }
                }
            },
            "super": {
                "pt": "Sempre que sua cor ou qualquer carta de destino especial for comprada do baralho de destino, você pode usar este poder para dobrar seu fator de crescimento exponencial (movendo a ficha de x1 para x2, de x2 para x4, etc.).",
                "en": "Whenever your color or any special destiny card is drawn from the destiny deck, you may use this power to double your exponential growth factor (by moving the token from x1 to x2, from x2 to x4, etc.).",
                "timing": {
                    "player": {
                        "pt": "Apenas Jogador Principal",
                        "en": "Main Player Only"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": false,
                        "reveal": true,
                        "resolution": false
                    }
                }
            }
        },
        "timing": {
            "player": {
                "pt": "Como Qualquer Jogador",
                "en": "As Any Player"
            },
            "choice": {
                "pt": "Obrigatório",
                "en": "Mandatory"
            },
            "phases": {
                "startTurn": false,
                "regroup": false,
                "destiny": true,
                "launch": false,
                "alliance": false,
                "planning": false,
                "reveal": false,
                "resolution": false
            }
        }
    },
    {
        "id": "nanny",
        "expansion": "Cosmic Eons",
        "name": {
            "pt": "Nanny",
            "en": "Nanny"
        },
        "aka": "Babá",
        "summary": {
            "pt": "Motiva",
            "en": "Motivates"
        },
        "power": {
            "pt": "<b>Você tem o poder da Consequência.</b> Quando você não for um jogador principal, depois das alianças serem formadas mas antes das cartas de encontro serem escolhidas, você <b>pode usar</b> este poder para \"motivar\" um ou ambos os jogadores principais. Para motivar um jogador, dê a ele ou ela uma carta de negociação da sua mão para adicioná-la na mão dele ou dela e dê a ele ou ela uma consequência das suas cartas da reserva de essence para colocar virada para cima perto da ficha de alien dele ou dela. Se um jogador motivado revela uma carta de negociação, execute o incentivo: a carta de consequência volta para você e você recebe uma recompensa. Se um jogador motivado não revela uma carta de negociação, execute a punição e deixe a carta de consequência no lugar para marcar o tempo limite.<br/><br/>Um jogador no tempo limite não participa do jogo de nenhuma maneira e nem se comunica com outros jogadores e nenhum outro jogador se comunica com o jogador no tempo limite. Se o jogador é o atacante, o turno dele ou dela termina. Se o jogador vira o defensor, o atacante compra uma carta de destino novamente. No final do tempo limite, o jogador retorna a carta de consequência para você. Em qualquer caso que o jogo não pode prosseguir por causa de tempos limites, todos as outras cartas de consequência dos jogadores voltam para você.<br/><br/>Sempre que um ou mais jogadores descartam uma carta de negociação, você <b>pode usar</b> este poder para recuperar uma dessas cartas de negociação e adicioná-la para a sua mão. Você joga e descarta cartas de negociação normalmente.",
            "en": "<b>You have the power of Consequences.</b> When you are not a main player, after alliances are formed but before encounter cards are selected, you <b>may use</b> this power to \"motivate\" one or both main players. To motivate a player, give him or her one negotiate card from your hand to add to his or her hand, and give him or her a consequence from your essence card cache to place faceup next to his or her alien sheet. If a motivated player reveals a negotiate card, carry out the incentive; the consequence card is returned to you and you receive one reward. If a motivated player does not reveal a negotiate card, carry out the punishment and leave the consequence card in place to mark the timeout.<br/><br/>A player in a timeout may not participate in the game in any way or communicate with other players, nor may other players communicate with the player in the timeout. If that player is the offense, his or her turn ends. If that player becomes the defense, the offense draws destiny again. At the end of the timeout, the player returns the consequence card to you. In any case where play cannot progress because of timeouts, all other players' consequence cards are returned to you.<br/><br/>Whenever one or more other players discard negotiate cards, you <b>may use</b> this power to retrieve one of those negotiate cards and add it to your hand. You play and discard negotiates normally."
        },
        essence: {
            "name": {
                "pt": "Consequência",
                "en": "Consequence"
            },
            "list": {
                "1": {
                    "name": {
                        "pt": "Warp",
                        "en": "Warp"
                    },
                    "body": {
                        "pt": "Incentivo: Libere todas as naves de um outro jogador do warp e receba uma recompensa por cada nave liberada. Punição: Perca duas naves de sua escolha para o warp de colônias estrangeiras (se possível). Você está em tempo limite durante o turno do próximo jogador.",
                        "en": "Incentive: Release all of one other player's ships from the warp and receive one reward for each ship released. Punishment: Lose two ships of your choice to the warp from foreign colonies (if possible). You are on timeout during of the next player's turn."
                    }
                },
                "2": {
                    "name": {
                        "pt": "Nave",
                        "en": "Ship"
                    },
                    "body": {
                        "pt": "Incentivo: Libere 1 de suas naves do warp. Punição: Perca 1 nave para o warp. Você está em tempo limite durante o turno do próximo jogador.",
                        "en": "Incentive: Release 1 of your ships from the warp. Punishment: Lose 1 ship to the warp. You are on timeout during the next player's turn."
                    }
                },
                "3": {
                    "name": {
                        "pt": "Recompensa",
                        "en": "Reward"
                    },
                    "body": {
                        "pt": "Incentivo: Receba 1 recompensa por cada nave que você tiver no encontro. Punição: A Babá olha sua mão e descarta quaisquer ou todas as cartas de artefato e cartas do baralho de recompensas. Você está em tempo limite durante o turno do próximo jogador.",
                        "en": "Incentive: Recieve 1 reward for every ship you have in the encounter. Punishment: The Nanny looks at your hand and discards any or all artifact cards and cards from the reward deck. You are on timeout during the next player's turn."
                    }
                },
                "4": {
                    "name": {
                        "pt": "Mão",
                        "en": "Hand"
                    },
                    "body": {
                        "pt": "Incentivo: Descarte quantas cartas desejar da sua mão. Punição: A Babá olha sua mão e descarta sua carta de ataque mais alta. Você está em tempo limite durante o primeiro encontro do próximo jogador.",
                        "en": "Incentive: Discard as many cards as you wish from your hand. Punishment: The Nanny looks at your hand and discards your highest attack card. You are on timeout during the next player's first encounter."
                    }
                },
                "5": {
                    "name": {
                        "pt": "Baralho",
                        "en": "Deck"
                    },
                    "body": {
                        "pt": "Incentivo: Compre até cinco cartas do baralho. Fique com uma e descarte o resto. Punição: A Babá descarta metade das cartas (arredondado para cima) da sua mão aleatoriamente. Você está em tempo limite durante o primeiro encontro do próximo jogador.",
                        "en": "Incentive: Draw up to five cards from the deck. Keep one and discard the rest. Punishment: The Nanny discards half of the cards (rounded up) from your hand at random. You are on timeout during the next player's first encounter."
                    }
                },
                "6": {
                    "name": {
                        "pt": "Colônia",
                        "en": "Colony"
                    },
                    "body": {
                        "pt": "Incentivo: Redistribua suas naves entre suas colônias como achar melhor. Punição: A Babá envia uma de suas colônias para o warp. Você está em tempo limite durante o turno do próximo jogador.",
                        "en": "Incentive: Redistribute your ships among your colonies as you see fit. Punishment: The Nanny sends one of your colonies to the warp. You are on timeout during the next player's turn."
                    }
                },
                "7": {
                    "name": {
                        "pt": "Carta",
                        "en": "Card"
                    },
                    "body": {
                        "pt": "Incentivo: Compre uma carta do baralho cósmico ou (se disponível) de recompensas. Punição: A Babá descarta uma carta da sua mão aleatoriamente. Você está em tempo limite durante o primeiro encontro do próximo jogador.",
                        "en": "Incentive: Draw one card from the cosmic or (if available) reward deck. Punishment: The Nanny discards one card from your hand at random. You are on timeout during the next player's first encounter."
                    }
                },
                "8": {
                    "name": {
                        "pt": "Aliado",
                        "en": "Ally"
                    },
                    "body": {
                        "pt": "Incentivo: Receba uma recompensa por cada jogador que se juntou ao seu lado como aliado. Punição: A Babá dispensa um de seus aliados deste encontro e esse jogador retorna suas naves para as colônias. Você está em tempo limite durante o primeiro encontro do próximo jogador.",
                        "en": "Incentive: Receive a reward for every player who joined your side as an ally. Punishment: The Nanny dismisses one of your allies from this encounter and that player returns his or her ships to colonies. You are on timeout during the next player's first encounter."
                    }
                }
            }
        },
        "history": {
            "pt": "As Babás estão engajadas em uma campanha de castigo em todo o Cosmos.",
            "en": "The Nannies are engaged in a time out campaign throughout the Cosmos."
        },
        "flare": {
            "wild": {
                "pt": "Como jogador principal, após as alianças serem formadas mas antes das cartas de encontro serem selecionadas, você pode usar este poder para 'motivar' um ou ambos os jogadores principais. Para motivar um jogador, dê a ele uma carta de negociação da sua mão para adicionar à mão dele, e dê a ele uma consequência do seu cache de cartas de essência para colocar virada para cima ao lado da ficha de alienígena dele.",
                "en": "As a main player, after alliances are formed but before encounter cards are selected, you may use this power to \"motivate\" one or both main players. To motivate a player, give him or her one negotiate card from your hand to add to his or her hand, and give him or her a consequence from your essence card cache to place faceup next to his or her alien sheet.",
                "timing": {
                    "player": {
                        "pt": "Como Qualquer Jogador",
                        "en": "As Any Player"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": false,
                        "reveal": false,
                        "resolution": true
                    }
                }
            },
            "super": {
                "pt": "Como aliado, após as alianças serem formadas mas antes das cartas de encontro serem selecionadas, você pode usar este poder para 'motivar' um ou ambos os jogadores principais. Para motivar um jogador, dê a ele uma carta de negociação da sua mão para adicionar à mão dele, e dê a ele uma consequência do seu cache de cartas de essência para colocar virada para cima ao lado da ficha de alienígena dele.",
                "en": "As an ally, after alliances are formed but before encounter cards are selected, you may use this power to \"motivate\" one or both main players. To motivate a player, give him or her one negotiate card from your hand to add to his or her hand, and give him or her a consequence from your essence card cache to place faceup next to his or her alien sheet.",
                "timing": {
                    "player": {
                        "pt": "Apenas Jogador Principal",
                        "en": "Main Player Only"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": true,
                        "reveal": false,
                        "resolution": false
                    }
                }
            }
        },
        "timing": {
            "player": {
                "pt": "Como Qualquer Jogador",
                "en": "As Any Player"
            },
            "choice": {
                "pt": "Opcional",
                "en": "Optional"
            },
            "phases": {
                "startTurn": true,
                "regroup": true,
                "destiny": true,
                "launch": true,
                "alliance": true,
                "planning": true,
                "reveal": true,
                "resolution": true
            }
        }
    },
    {
        "id": "nightmare",
        "expansion": "Cosmic Eons",
        "name": {
            "pt": "Nightmare",
            "en": "Nightmare"
        },
        "aka": "Pesadelo",
        "summary": {
            "pt": "Distribui Pesadelos",
            "en": "Gives Bad Dreams"
        },
        "power": {
            "pt": "<b>Você tem o poder do Pesadelo.</b> Uma vez por encontro, quando um jogador principal recusou em convidar você para aliar ou outro jogador está no lado vencedor de um encontro quando você está no lado perdedor, você <b>pode usar</b> este poder para colocar um pesadelo de sua reserva de cartas de essence virada para baixo perto do jogador. Você pode dar uma carta de pesadelo para um jogador que já tenha uma.<br/><br/>Você pode revelar uma carta de pesadelo a qualquer hora. Aquele jogador lê a carta e aplica seus efeitos (se aplicável). Cartas de pesadelos reveladas retornam para você.",
            "en": "<b>You have the power of Bad Dreams.</b> Once per encounter, when a main player has declined to invite you to ally, or another player is on the winning side of an encounter when you are on the losing side, you <b>may use</b> this power to place a bad dream from your essence card cache facedown near that player. You cannot give a bad dream card to a player who already has one.<br/><br/>You may reveal a player's bad dream card at any time. That player reads the card and carries out its effects (if they apply). Revealed bad dream cards are returned to you."
        },
        essence: {
            "name": {
                "pt": "Pesadelo",
                "en": "Bad Dream"
            },
            "list": {
                "1": {
                    "name": {
                        "pt": "Despreparado",
                        "en": "Unprepared"
                    },
                    "body": {
                        "pt": "Se você estiver selecionando uma carta de encontro como jogador principal, em vez disso, você está comprando cartas do baralho, dando todas as cartas que não sejam de encontro compradas para o Pesadelo, e jogando a primeira carta de encontro que você comprar virada para baixo como sua carta de encontro.",
                        "en": "If you are selecting an encounter card as a main player, instead you are actually drawing cards from the deck, giving all non-encounter cards drawn to the Nightmare, and playing the first encounter card you draw facedown as your encounter card."
                    }
                },
                "2": {
                    "name": {
                        "pt": "Dentes Caindo",
                        "en": "Teeth Falling Out"
                    },
                    "body": {
                        "pt": "Se você estiver revelando uma carta de ataque, em vez de seu valor nominal, o valor da carta é dividido por 2 (arredondado para baixo).",
                        "en": "If you are revealing an attack card, instead of its face value, the card's value is divided by 2 (rounded down)."
                    }
                },
                "3": {
                    "name": {
                        "pt": "Vendo os Mortos",
                        "en": "Seeing the Dead"
                    },
                    "body": {
                        "pt": "Se você estiver recuperando uma nave do warp durante sua fase de reagrupamento, em vez disso, todos os outros jogadores estão recuperando uma nave do warp.",
                        "en": "If you are retrieving one ship from the warp during your regroup phase, instead every other player is retrieving one ship from the warp."
                    }
                },
                "4": {
                    "name": {
                        "pt": "Correndo sem Sair do Lugar",
                        "en": "Running but Getting Nowhere"
                    },
                    "body": {
                        "pt": "Se você estiver aceitando um convite de aliança, em vez disso, você está recusando todos os convites.",
                        "en": "If you are accepting an alliance invitation, instead you are actually declining all invitations."
                    }
                },
                "5": {
                    "name": {
                        "pt": "Sem Combustível",
                        "en": "Out of Fuel"
                    },
                    "body": {
                        "pt": "Se você estiver começando seu segundo encontro, em vez disso, você está terminando seu turno.",
                        "en": "If you are starting your second encounter, instead you are actually ending your turn."
                    }
                },
                "6": {
                    "name": {
                        "pt": "Nu em Público",
                        "en": "Naked in Public"
                    },
                    "body": {
                        "pt": "Se você estiver vencendo o jogo junto com um ou mais outros jogadores, em vez disso, esses outros jogadores estão vencendo sem você.",
                        "en": "If you are winning the game along with one or more other players, instead those other players are actually winning without you."
                    }
                },
                "7": {
                    "name": {
                        "pt": "Perdeu o Caminho de Casa",
                        "en": "Lost the Way Home"
                    },
                    "body": {
                        "pt": "Se você estiver concordando com um acordo que envolve receber uma colônia, em vez disso, você está concordando com uma versão diferente desse acordo que substitui a colônia que você receberia por uma carta aleatória da mão do outro jogador.",
                        "en": "If you are agreeing to a deal that involves receiving a colony, instead you are actually agreeing to a different version of that deal that replaces the colony you would receive with a card at random from the other player's hand."
                    }
                },
                "8": {
                    "name": {
                        "pt": "Atrasado para o Trabalho",
                        "en": "Late for Work"
                    },
                    "body": {
                        "pt": "Se você estiver começando sua fase de reagrupamento, em vez disso, você está pulando sua fase de reagrupamento.",
                        "en": "If you are starting your regroup phase, instead you are actually skipping your regroup phase."
                    }
                },
                "9": {
                    "name": {
                        "pt": "Caindo para Sempre",
                        "en": "Falling Forever"
                    },
                    "body": {
                        "pt": "Se você estiver pousando naves no planeta alvo como vencedor em um encontro, em vez disso, suas naves estão caindo no warp.",
                        "en": "If you are landing ships on the targeted planet as a winner in an encounter, instead your ships are falling into the warp."
                    }
                },
                "10": {
                    "name": {
                        "pt": "Sendo Perseguido",
                        "en": "Being Chased"
                    },
                    "body": {
                        "pt": "Se outro jogador estiver apontando o portal do hiperespaço para uma colônia ou planeta natal que não seja seu, em vez disso, esse jogador está encontrando você como a defesa em seu sistema natal.",
                        "en": "If another player is aiming the hyperspace gate at a colony or home planet which is not yours, instead that player is actually encountering you as the defense in your home system."
                    }
                }
            }
        },
        "history": {
            "pt": "\"Existem conhecimentos - coisas que nós sabemos. E desconhecimentos. Coisas importantes que nós sabemos que não sabemos. E desconhecidos desconhecidos - coisas que nós somos ignorantes de não saber.\" (Encontrado em um diário no planeta no fim do mundo.)",
            "en": "\"There are knowns – things we know. And unknowns. Meaning things we know we don't know. And unknown unknowns – things we are ignorant of not knowing.\" (Found in a journal on a backwater planet.)"
        },
        "flare": {
            "wild": {
                "pt": "Uma vez por encontro, quando um jogador principal se recusar a convidá-lo para se aliar, ou outro jogador estiver no lado vencedor de um encontro quando você estiver no lado perdedor, você pode usar este poder para colocar um pesadelo do seu cache de cartas de essência virado para baixo perto desse jogador.",
                "en": "Once per encounter, when a main player has declined to invite you to ally, or another player is on the winning side of an encounter when you are on the losing side, you may use this power to place a bad dream from your essence card cache facedown near that player.",
                "timing": {
                    "player": {
                        "pt": "Como Qualquer Jogador",
                        "en": "As Any Player"
                    },
                    "phases": {
                        "startTurn": true,
                        "regroup": true,
                        "destiny": true,
                        "launch": true,
                        "alliance": true,
                        "planning": true,
                        "reveal": true,
                        "resolution": true
                    }
                }
            },
            "super": {
                "pt": "Você pode revelar a carta de pesadelo de um jogador a qualquer momento. Aquele jogador lê a carta e executa seus efeitos (se aplicável). Cartas de pesadelo reveladas são devolvidas a você.",
                "en": "You may reveal a player's bad dream card at any time. That player reads the card and carries out its effects (if they apply). Revealed bad dream cards are returned to you.",
                "timing": {
                    "player": {
                        "pt": "Como Qualquer Jogador",
                        "en": "As Any Player"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": true,
                        "planning": false,
                        "reveal": false,
                        "resolution": true
                    }
                }
            }
        },
        "timing": {
            "player": {
                "pt": "Como Qualquer Jogador",
                "en": "As Any Player"
            },
            "choice": {
                "pt": "Opcional",
                "en": "Optional"
            },
            "phases": {
                "startTurn": false,
                "regroup": false,
                "destiny": false,
                "launch": false,
                "alliance": true,
                "planning": false,
                "reveal": false,
                "resolution": true
            }
        }
    },
    {
        "id": "oligarch",
        "expansion": "Cosmic Eons",
        "name": {
            "pt": "Oligarch",
            "en": "Oligarch"
        },
        "aka": "Oligarca",
        "summary": {
            "pt": "Fica Rico Enquanto os Outros Ficam Pobres",
            "en": "Gets Richer as Others Get Poorer"
        },
        "power": {
            "pt": "<b>Preparação de Jogo:</b> Pegue seus 5 privilégios como reserva de cartas de essence. Você automaticamente inicia o jogo como o primeiro jogador.\n        <br/><br/><b>Você tem o poder da Ganância.</b> Toda vez que você compra uma nova mão de cartas, incluindo no início do jogo, compre uma carta adicional.\n        <br/><br/>Você acumula privilégios até o maior número de colônias estrangeiras alcançadas por qualquer jogador.\n        <br/><br/><b>Use</b> este poder sempre que qualquer jogador tenha mais colônias estrangeiras do que o número de suas cartas de privilégio viradas para cima. Olhe sua reserva de cartas de essence, escolha um privilégio e jogue-o virado para cima próximo a esta ficha. Se você for cancelado, o privilégio que você tentou jogar é removido do jogo.",
            "en": "<b>Game Setup:</b> Take your 5 privileges as your essence card cache. You automatically start the game as the first player.\n        <br/><br/><b>You have the power of Greed.</b> Every time you draw a new hand of cards, including at the beginning of the game, draw one additional card.\n        <br/><br/>You accumulate privileges up to the highest number of foreign colonies that has been reached by any player.\n        <br/><br/><b>Use</b> this power whenever any one player has more foreign colonies than the number of your faceup privilege cards. Look through your essence card cache, choose one privilege, and play it faceup next to this sheet. If you are zapped, the privilege you attempted to play is removed from the game."
        },
        essence: {
            "name": {
                "pt": "Privilégio",
                "en": "Privilege"
            },
            "list": {
                "1": {
                    "name": {
                        "pt": "Controle de Compensação",
                        "en": "Compensation Control"
                    },
                    "body": {
                        "pt": "Quando você deve receber compensação, receba mais duas compensações. Todos os outros jogadores que devem receber compensação recebem duas compensações a menos.",
                        "en": "When you should collect compensation, collect two more compensation. All other players who should collect compensation collect two less compensation."
                    }
                },
                "2": {
                    "name": {
                        "pt": "Inveja de Encontro",
                        "en": "Encounter Envy"
                    },
                    "body": {
                        "pt": "Quando você é um jogador principal e revela uma carta de ataque, adicione 3 ao seu total. Todos os outros jogadores principais que revelam cartas de ataque subtraem 2 de seus totais.",
                        "en": "When you are a main player and reveal an attack card, add 3 to your total. All other main players who reveal attack cards subtract 2 from their totals."
                    }
                },
                "3": {
                    "name": {
                        "pt": "Sifão de Recompensas",
                        "en": "Rewards Siphon"
                    },
                    "body": {
                        "pt": "Quando você deve receber recompensas, receba mais duas recompensas. Todos os outros jogadores que devem receber recompensas recebem uma recompensa a menos.",
                        "en": "When you should receive rewards, receive two more rewards. All other players who should receive rewards receive one less reward."
                    }
                },
                "4": {
                    "name": {
                        "pt": "Posse de Vitória",
                        "en": "Victory Possession"
                    },
                    "body": {
                        "pt": "Você precisa de uma colônia estrangeira a menos que o normal para vencer o jogo pelo método normal. Todos os outros jogadores precisam de uma a mais que o normal.",
                        "en": "You need one foreign colony fewer than normal to win the game via the normal method. All other players need one more than normal."
                    }
                },
                "5": {
                    "name": {
                        "pt": "Reivindicação de Warp",
                        "en": "Warp Claim"
                    },
                    "body": {
                        "pt": "Quando você deve perder nave(s) para o warp, perca duas naves a menos para o warp. Todos os outros jogadores que devem perder uma ou mais naves para o warp perdem uma nave a mais para o warp. Naves que teriam sido perdidas retornam para outras colônias.",
                        "en": "When you should lose ship(s) to the warp, lose two fewer ships to the warp. All other players who should lose one or more ships to the warp lose one more ship to the warp. Ships which would have been lost return to other colonies."
                    }
                }
            }
        },
        "history": {
            "pt": "Ouvido por acaso no Clube Elite de Squash do Oligarca: \"Não é o suficiente saber que eu é que estou controlando o Universo dos meus holodecks. É que eu quero saber que os meus 'amigos' vejam suas vidas imensamente e permanentemente menos bem sucedidas que a minha.\"",
            "en": "Overheard at the Oligarch's Elite Club Squash'em: \"It's not enough to know that I'm controlling the Universe from my holodecks, it's that I also want to know that my 'friends' see their lives as immeasurably and permanently less successful than mine.\""
        },
        "flare": {
            "wild": {
                "pt": "Como jogador principal, após o ataque lançar naves, você pode usar este poder para olhar seu cache de cartas de essência, escolher um privilégio e jogá-lo virado para cima ao lado desta ficha. Se você for cancelado, o privilégio que você tentou jogar é removido do jogo.",
                "en": "As a main player, after the offense launches ships, you may use this power to look through your essence card cache, choose one privilege, and play it faceup next to this sheet. If you are zapped, the privilege you attempted to play is removed from the game.",
                "timing": {
                    "player": {
                        "pt": "Apenas Ataque",
                        "en": "Offense Only"
                    },
                    "phases": {
                        "startTurn": true,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": false,
                        "reveal": false,
                        "resolution": false
                    }
                }
            },
            "super": {
                "pt": "Como aliado, após o ataque lançar naves, você pode usar este poder para olhar seu cache de cartas de essência, escolher um privilégio e jogá-lo virado para cima ao lado desta ficha. Se você for cancelado, o privilégio que você tentou jogar é removido do jogo.",
                "en": "As an ally, after the offense launches ships, you may use this power to look through your essence card cache, choose one privilege, and play it faceup next to this sheet. If you are zapped, the privilege you attempted to play is removed from the game.",
                "timing": {
                    "player": {
                        "pt": "Como Qualquer Jogador",
                        "en": "As Any Player"
                    },
                    "phases": {
                        "startTurn": true,
                        "regroup": true,
                        "destiny": true,
                        "launch": true,
                        "alliance": true,
                        "planning": true,
                        "reveal": true,
                        "resolution": true
                    }
                }
            }
        },
        "timing": {
            "player": {
                "pt": "Como Qualquer Jogador",
                "en": "As Any Player"
            },
            "choice": {
                "pt": "Obrigatório",
                "en": "Mandatory"
            },
            "phases": {
                "startTurn": true,
                "regroup": true,
                "destiny": true,
                "launch": true,
                "alliance": true,
                "planning": true,
                "reveal": true,
                "resolution": true
            }
        }
    },
    {
        "id": "pack_rat",
        "expansion": "Cosmic Eons",
        "name": {
            "pt": "Pack Rat",
            "en": "Pack Rat"
        },
        "aka": "Acumulador",
        "summary": {
            "pt": "Coleciona Objetos",
            "en": "Collects Objects"
        },
        "power": {
            "pt": "<b>Você tem o poder de Coletar.</b> Como um jogador principal, antes das cartas de encontro serem escolhidas, você <b>pode usar</b> este poder para pegar um \"objeto\" pertencente a outro jogador principal e colocá-lo nesta ficha. Esse jogador deve dar a você uma das naves dele ou dela de uma colônia. Coloque-a no topo do objeto como um lembrete do dono. Objetos colecionáveis: uma carta aleatória da mão, uma nave do warp, a carta do topo de um conjunto de cartas de essence, um planeta vazio de um sistema do jogador, uma carta de tecnologia não pesquisada, um marcador na ficha do jogador, incluindo marcadores especiais nesta ficha, ex.: aqueles do Fire Dancer, Grudge ou Particle. Você não pode pegar um marcador se ao fizer você deixar o poder do alien completamente inutilizado. Você não pode olhar os objetos coletados virados para baixo. Cada objeto que você coletou adiciona 1 ao seu total quando você for o defensor.<br/><br/>Você pode liberar objeto(s) como parte de um acordo com qualquer jogador. Além disso, quando você não é um jogador principal, durante a fase de aliança, você pode liberar objetos em trocas. Estas trocas podem ser sugeridas por qualquer jogador, devem envolver a liberação de um ou mais objetos e pode incluir qualquer coisa que poderia ser dada como parte de um acordo; Entretanto, somente você pode ganhar uma colônia estrangeira de uma troca. Você deve aceitar uma troca simples de uma colônia estrangeira por um objeto com dono. Cada objeto liberado é restaurado ao seu propósito original e local e a nave com dono retorna para a colônia dele ou dela.",
            "en": "<b>You have the power to Collect.</b> As a main player, before encounter cards are selected, you <b>may use</b> this power to take one \"object\" belonging to the other main player and place it on this sheet. That player must then give you one of his or her ships from a colony. Place it on top of the object as an owner ID. Collectible objects: a card at random from a hand, a ship from the warp, the top card from a set of essence cards, an empty planet from that player's system, a facedown, un-researched tech card, or a token on that player's alien sheet, including special tokens understood to be on the sheet, e.g. those of Fire Dancer, Grudge, or Particle. You cannot take a token if doing so would make the alien power completely unusable. You may not look at facedown collected objects. Each object you have collected adds 1 to your total when you are the defense.<br/><br/>You may release object(s) as part of a deal with any player. Also, when you are not a main player, during the alliance phase you may release objects in trades. These trades may be suggested by any player, must involve the release of one or more objects, and may include anything that could be given as part of a deal; however, only you may gain a foreign colony from such a trade. You must accept a simple trade of a foreign colony for an owner's object. you <b>may use</b> this power to finalize each alliance-phase trade. Each released object is restored to its original purpose and location and its ID ship returns to any of its owner's colonies."
        },
        "history": {
            "pt": "Os Acumuladores correm para arrastar objetos de volta para casa, para desgosto dos proprietários anteriores.",
            "en": "The Pack Rats scurry about dragging objects back home, to the chagrin of prior owners.\""
        },
        "flare": {
            "wild": {
                "pt": "Como jogador principal, antes das cartas de encontro serem selecionadas, você pode usar este poder para pegar um 'objeto' pertencente ao outro jogador principal e colocá-lo nesta ficha. Aquele jogador deve então lhe dar uma de suas naves de uma colônia. Coloque-a em cima do objeto como uma identificação de proprietário.",
                "en": "As a main player, before encounter cards are selected, you may use this power to take one \"object\" belonging to the other main player and place it on this sheet. That player must then give you one of his or her ships from a colony. Place it on top of the object as an owner ID.",
                "timing": {
                    "player": {
                        "pt": "Apenas Ataque",
                        "en": "Offense Only"
                    },
                    "phases": {
                        "startTurn": true,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": false,
                        "reveal": false,
                        "resolution": false
                    }
                }
            },
            "super": {
                "pt": "Como aliado, durante a fase de aliança você pode liberar objetos em trocas. Essas trocas podem ser sugeridas por qualquer jogador, devem envolver a liberação de um ou mais objetos e podem incluir qualquer coisa que poderia ser dada como parte de um acordo; no entanto, apenas você pode ganhar uma colônia estrangeira de tal troca. Você deve aceitar uma troca simples de uma colônia estrangeira pelo objeto de um proprietário.",
                "en": "As an ally, during the alliance phase you may release objects in trades. These trades may be suggested by any player, must involve the release of one or more objects, and may include anything that could be given as part of a deal; however, only you may gain a foreign colony from such a trade. You must accept a simple trade of a foreign colony for an owner's object.",
                "timing": {
                    "player": {
                        "pt": "Apenas Jogador Principal",
                        "en": "Main Player Only"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": true,
                        "reveal": false,
                        "resolution": false
                    }
                }
            }
        },
        "timing": {
            "player": {
                "pt": "Como Qualquer Jogador",
                "en": "As Any Player"
            },
            "choice": {
                "pt": "Opcional",
                "en": "Optional"
            },
            "phases": {
                "startTurn": false,
                "regroup": false,
                "destiny": false,
                "launch": false,
                "alliance": true,
                "planning": true,
                "reveal": false,
                "resolution": false
            }
        }
    },
    {
        "id": "particle",
        "expansion": "Cosmic Eons",
        "name": {
            "pt": "Particle",
            "en": "Particle"
        },
        "aka": "Partícula",
        "summary": {
            "pt": "Planetas são Emparelhados",
            "en": "Planets Are Paired"
        },
        "power": {
            "pt": "<b>Você tem o poder do Emaranhamento Quântico.</b> Como atacante ou um aliado, se sua(s) nave(s) pousarem no planeta alvo e aquele planeta não tiver um marcador de emaranhamento, <b>use</b> este poder para emaranhar-se com outro planeta. Coloque um marcador de emaranhamento não atribuído próximo ao planeta alvo e coloque seu marcador emaranhado emparelhado (com a mesma letra) próximo a qualquer outro planeta que já não esteja emaranhado.<br/><br/>Sempre que o número de naves em qualquer planeta emaranhado mudar, incluindo imediatamente depois de usar este poder, você deve adicionar suas naves para ou remover suas naves do planeta emaranhado correspondente de tal forma que você tenha o mesmo número de naves em ambos. Naves movidas para resolver o emaranhado deve vir de ou ir para suas outras colônias nos planetas que não estão emaranhados.<br/><br/>Sempre que você estiver incapaz de resolver um emaranhamento ou você não tiver naves em um par de planetas emaranhados, estes marcadores de emaranhamento emparelhados são descartados.<br/><br/>Se um planeta emaranhado é removido de jogo, os marcadores de emaranhamento pareados afetados são descartados. Suas naves permanecem no planeta restante.",
            "en": "<b>You have the power of Quantum Entanglement.</b> As the offense or an ally, if your ship(s) should land on the targeted planet and that planet does not have an entanglement token, <b>use</b> this power to entangle it with another planet. Place one unassigned entanglement token next to the targeted planet and place its paired entanglement token (with the same letter) next to any other planet that is not already entangled.<br/><br/>Whenever the number of your ships on any entangled planet changes, including immediately after using this power, you must add your ships to or remove your ships from the corresponding entangled planet so that you have the same number of ships on both. Ships moved to resolve the entanglement must come from or go to your other colonies on planets that are not entangled.<br/><br/>Whenever you are unable to resolve an entanglement, or you have no ships on a pair of entangled planets, those planets' paired entanglement tokens are discarded.<br/><br/>If an entangled planet is removed from the game, the paired entanglement tokens affecting it are discarded. Your ships stay on the remaining planet."
        },
        "history": {
            "pt": "<![CDATA[p(a,c) - p(b,a) - p(b,c) > 1… Certo?]]>",
            "en": "<![CDATA[p(a,c) - p(b,a) - p(b,c) > 1… Right?]]>"
        },
        "flare": {
            "wild": {
                "pt": "Como ataque ou aliado, se sua(s) nave(s) pousarem no planeta alvo e esse planeta não tiver uma ficha de emaranhamento, você pode usar este poder para emaranhá-lo com outro planeta. Coloque uma ficha de emaranhamento não atribuída ao lado do planeta alvo e coloque sua ficha de emaranhamento emparelhada (com a mesma letra) ao lado de qualquer outro planeta que ainda não esteja emaranhado.",
                "en": "As the offense or an ally, if your ship(s) should land on the targeted planet and that planet does not have an entanglement token, you may use this power to entangle it with another planet. Place one unassigned entanglement token next to the targeted planet and place its paired entanglement token (with the same letter) next to any other planet that is not already entangled.",
                "timing": {
                    "player": {
                        "pt": "Apenas Ataque",
                        "en": "Offense Only"
                    },
                    "phases": {
                        "startTurn": true,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": false,
                        "reveal": false,
                        "resolution": false
                    }
                }
            },
            "super": {
                "pt": "Sempre que o número de suas naves em qualquer planeta emaranhado mudar, incluindo imediatamente após usar este poder, você deve adicionar suas naves ou remover suas naves do planeta emaranhado correspondente para que você tenha o mesmo número de naves em ambos. Naves movidas para resolver o emaranhamento devem vir de ou ir para suas outras colônias em planetas que não estão emaranhados.",
                "en": "Whenever the number of your ships on any entangled planet changes, including immediately after using this power, you must add your ships to or remove your ships from the corresponding entangled planet so that you have the same number of ships on both. Ships moved to resolve the entanglement must come from or go to your other colonies on planets that are not entangled.",
                "timing": {
                    "player": {
                        "pt": "Apenas Defesa",
                        "en": "Defense Only"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": false,
                        "reveal": false,
                        "resolution": true
                    }
                }
            }
        },
        "timing": {
            "player": {
                "pt": "Apenas Ataque ou Aliado",
                "en": "Offense or Ally Only"
            },
            "choice": {
                "pt": "Obrigatório",
                "en": "Mandatory"
            },
            "phases": {
                "startTurn": false,
                "regroup": false,
                "destiny": false,
                "launch": false,
                "alliance": false,
                "planning": false,
                "reveal": false,
                "resolution": true
            }
        }
    },
    {
        "id": "peddler",
        "expansion": "Cosmic Eons",
        "name": {
            "pt": "Peddler",
            "en": "Peddler"
        },
        "aka": "Camelô",
        "summary": {
            "pt": "Vende Cartas",
            "en": "Sells Cards"
        },
        "power": {
            "pt": "<b>Preparação de Jogo:</b> Depois que todos os jogadores receberem suas mãos iniciais, compre um total de 8 cartas do baralho cósmico, recompensa e/ou tecnologia (o que estiver em jogo). Olhe as cartas e crie um \"armazém\" de seis cartas viradas para cima e duas cartas viradas para baixo. Cartas no seu armazém não são parte de sua mão mas você pode vê-las a qualquer hora.<br/><br/><b>Você tem o poder de Vender.</b> Depois das alianças formadas, se você não é um jogador principal, uma vez por encontro você <b>pode usar</b> este poder para vender uma carta, seja uma carta pública das suas cartas abertas do armazém ou uma carta privada do seu armazém de cartas viradas para baixo. Jogadores podem oferecer a você qualquer coisa que poderia ser dada como parte de um acordo para comprar esta carta. Em uma venda privada, você pode mostrar a carta para qualquer jogador(es) que você quiser; aqueles que não viram ainda podem fazer uma oferta \"cega\". Quando você vende uma carta de tecnologia, seu dono a coloca virada para baixo e a pesquisa normalmente. Qualquer carta que você ganha da venda deve ser colocada em sua mão.<br/><br/>No final de qualquer encontro, você pode colocar sua mão de lado enquanto você pega todas as suas cartas do armazém. Descarte uma delas e então compre cartas para reabastecer seu armazém de volta para oito de quaisquer um dos baralhos disponíveis e reabra o seu armazém com quaisquer seis cartas viradas para cima e as outras duas viradas para baixo",
            "en": "<b>Game Setup:</b> After all players are dealt their starting hands, draw a total of 8 cards from the cosmic, reward, and/or tech decks (whichever are in the game). Look at the cards and create a \"store\" of six faceup cards and two facedown cards. Cards in your store are not part of your hand, but you may look at them at any time.<br/><br/><b>You have the power to Sell.</b> After alliances are formed, if you are not a main player, once per encounter you <b>may use</b> this power to sell one card, either publicly from your faceup store cards or privately from your facedown store cards. Players may offer you anything they could give you as part of a deal to buy that card. In a private sale, you may show the card to whichever player(s) you like; those not shown the card may still make a \"blind\" offer. When you sell a tech card, its owner places it facedown and researches it normally. Any cards you gain from the sale must be placed in your hand.<br/><br/>At the end of any encounter, you may place your hand to one side while you pick up all of the cards in your store. Discard one of them. Then draw cards to restock your store back to eight from any or all of the decks available, and reopen your store with any six of its cards faceup and the other two facedown."
        },
        "history": {
            "pt": "Os Camelôs apertam as mãos e vendem seus produtos pelo Cosmos e esperam estar em todos os cantos de todos os planetas em breve!",
            "en": "The Peddlers have been shaking hands and hawking their wares across the Cosmos and hope to be on every corner of every planet very soon!\""
        },
        "flare": {
            "wild": {
                "pt": "Como jogador principal, após as alianças serem formadas, uma vez por encontro você pode usar este poder para vender uma carta, seja publicamente de suas cartas de loja viradas para cima ou privadamente de suas cartas de loja viradas para baixo. Os jogadores podem lhe oferecer qualquer coisa que poderiam lhe dar como parte de um acordo para comprar aquela carta.",
                "en": "As a main player, after alliances are formed, once per encounter you may use this power to sell one card, either publicly from your faceup store cards or privately from your facedown store cards. Players may offer you anything they could give you as part of a deal to buy that card.",
                "timing": {
                    "player": {
                        "pt": "Apenas Ataque",
                        "en": "Offense Only"
                    },
                    "phases": {
                        "startTurn": true,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": false,
                        "reveal": false,
                        "resolution": false
                    }
                }
            },
            "super": {
                "pt": "Como aliado, após as alianças serem formadas, uma vez por encontro você pode usar este poder para vender uma carta, seja publicamente de suas cartas de loja viradas para cima ou privadamente de suas cartas de loja viradas para baixo. Os jogadores podem lhe oferecer qualquer coisa que poderiam lhe dar como parte de um acordo para comprar aquela carta.",
                "en": "As an ally, after alliances are formed, once per encounter you may use this power to sell one card, either publicly from your faceup store cards or privately from your facedown store cards. Players may offer you anything they could give you as part of a deal to buy that card.",
                "timing": {
                    "player": {
                        "pt": "Como Qualquer Jogador",
                        "en": "As Any Player"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": true,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": false,
                        "reveal": false,
                        "resolution": false
                    }
                }
            }
        },
        "timing": {
            "player": {
                "pt": "Não Jogador Principal",
                "en": "Not Main Player"
            },
            "choice": {
                "pt": "Opcional",
                "en": "Optional"
            },
            "phases": {
                "startTurn": false,
                "regroup": false,
                "destiny": false,
                "launch": false,
                "alliance": true,
                "planning": false,
                "reveal": false,
                "resolution": false
            }
        }
    },
    {
        "id": "perfectionist",
        "expansion": "Cosmic Eons",
        "name": {
            "pt": "Perfectionist",
            "en": "Perfectionist"
        },
        "aka": "Perfeccionista",
        "summary": {
            "pt": "Mantém Somente as Melhores",
            "en": "Keeps Only the Best"
        },
        "power": {
            "pt": "<b>Você tem o poder de Ser Meticuloso.</b> Sempre que você adiciona quaisquer cartas para sua mão (incluindo quando você recebe sua mão inicial), você <b>pode usar</b> este poder para rejeitar quaisquer cartas que você não quiser e empilhá-las viradas para baixo nesta ficha em uma pilha de rejeitadas. Imediatamente reponha as cartas que você descartou com novas compradas do baralho (mas você não pode descartar e repor qualquer carta já reposta).<br/><br/>Você pode oferecer cartas da pilha de rejeitadas como parte de um acordo.<br/><br/>Quando outro jogador pega carta(s) da sua mão aleatoriamente, você <b>pode usar</b> este poder para forçar aquele jogador para pegá-las da sua pilha de rejeitadas (se essa pilha tiver cartas suficientes).<br/><br/>Se qualquer jogador não puder comprar cartas porque o baralho e sua pilha de rejeitadas tiverem poucas cartas, você deve descartar 15 cartas apropriadas aleatoriamente de sua pilha de rejeitadas (ou quantas você tiver se for menor do que 15) antes da pilha de descarte ser embaralhada.",
            "en": "<b>You have the power to Be Finicky.</b> Whenever you add any cards to your hand (including when you are dealt your starting hand), you <b>may use</b> this power to reject any of those cards you don't want and stack them facedown on this sheet in a reject pile. Immediately replace the cards you discarded with new ones drawn from the deck (but you may not discard and replace any of the replacements).<br/><br/>You may offer cards from your reject pile as part of a deal.<br/><br/>When another player takes card(s) from your hand at random, you <b>may use</b> this power to force that player to take them from your reject pile instead (if that pile has sufficient cards).<br/><br/>If any player cannot draw cards because a deck and its discard pile have too few, you must discard 15 appropriate cards at random from your reject pile (or as many as you have if it's fewer than 15) before that discard pile is reshuffled."
        },
        "history": {
            "pt": "Milhares de eras de pesquisa sobre uma rejeição de 99,9%% de produtos inferiores, com uma guinada, os Perfeccionistas agora escolhem seu caminho para o domínio cósmico, mantendo apenas o melhor dos melhores.",
            "en": "Parlaying eons of research into a 99.9%% rejection of inferior products, with a sniff and a wave, the Perfectionists now pick and choose their way to Cosmic mastery, keeping only the best of the best.\""
        },
        "flare": {
            "wild": {
                "pt": "Sempre que você adicionar cartas à sua mão (incluindo quando você receber sua mão inicial), você pode usar este poder para rejeitar quaisquer dessas cartas que você não queira e empilhá-las viradas para baixo nesta ficha em uma pilha de rejeição. Substitua imediatamente as cartas que você descartou por novas compradas do baralho (mas você não pode descartar e substituir nenhuma das substituições).",
                "en": "Whenever you add any cards to your hand (including when you are dealt your starting hand), you may use this power to reject any of those cards you don't want and stack them facedown on this sheet in a reject pile. Immediately replace the cards you discarded with new ones drawn from the deck (but you may not discard and replace any of the replacements).",
                "timing": {
                    "player": {
                        "pt": "Como Qualquer Jogador",
                        "en": "As Any Player"
                    },
                    "phases": {
                        "startTurn": true,
                        "regroup": true,
                        "destiny": true,
                        "launch": true,
                        "alliance": true,
                        "planning": true,
                        "reveal": true,
                        "resolution": true
                    }
                }
            },
            "super": {
                "pt": "Quando outro jogador pegar carta(s) da sua mão aleatoriamente, você pode usar este poder para forçar aquele jogador a pegá-las da sua pilha de rejeição em vez disso (se aquela pilha tiver cartas suficientes).",
                "en": "When another player takes card(s) from your hand at random, you may use this power to force that player to take them from your reject pile instead (if that pile has sufficient cards).",
                "timing": {
                    "player": {
                        "pt": "Como Qualquer Jogador",
                        "en": "As Any Player"
                    },
                    "phases": {
                        "startTurn": true,
                        "regroup": true,
                        "destiny": true,
                        "launch": true,
                        "alliance": true,
                        "planning": true,
                        "reveal": true,
                        "resolution": true
                    }
                }
            }
        },
        "timing": {
            "player": {
                "pt": "Como Qualquer Jogador",
                "en": "As Any Player"
            },
            "choice": {
                "pt": "Opcional",
                "en": "Optional"
            },
            "phases": {
                "startTurn": true,
                "regroup": true,
                "destiny": true,
                "launch": true,
                "alliance": true,
                "planning": true,
                "reveal": true,
                "resolution": true
            }
        }
    },
    {
        "id": "pretender",
        "expansion": "Cosmic Eons",
        "name": {
            "pt": "Pretender",
            "en": "Pretender"
        },
        "aka": "Fingido",
        "summary": {
            "pt": "Move para o Melhor Assento",
            "en": "Moves To Best Seat"
        },
        "power": {
            "pt": "<b>Você tem o poder de Assumir o Controle.</b> Como atacante, depois da carta de destino ser comprada, você <b>pode usar</b> este poder para pegar a(s) sua(s) ficha(s) e tudo que estiver nela(s) e mover para o que você considera ser o melhor assento. O jogador naquele assento pega a ficha dele ou dela e move para o seu assento. Recursos de poderes de aliens como o tesouro do Avarento, os marcadores do Guerreiro e cartas de essence, movem com estes poderes. Todo o resto é deixado para trás para se tornar propriedade do jogador que está chegando, incluindo cores de jogador, naves, mãos, sistemas planetários, colônias, etc.\n        <br/><br/>Depois que você tomar o lugar do assento de outro jogador e terminar o seu turno, o jogo continua a partir de você, baseado na nova ordem de assentos.",
            "en": "<b>You have the power to Take Over.</b> As the offense, after destiny is drawn, you <b>may use</b> this power to take your alien sheet(s) and everything on them and move to what you consider to be the best seat. The player in that seat takes his or her alien sheet(s) and moves to your seat. Facets of alien powers, such as the Miser's hoard, the Warrior's tokens, and alien essence cards, move with those powers. Everything else is left behind to become the property of the arriving player, including player colors, ships, hands, planet systems, colonies, etc.\n        <br/><br/>After taking over another player's seat and finishing your turn, play continues from you based on the new seating order."
        },
        "history": {
            "pt": "Os Fingidos gravitam instintivamente para aqueles com poder e privilégio. Agora, sua esfera de alvos possíveis se ampliou para incluir as muitas formas de vida de um Cosmos cada vez mais complexo.",
            "en": "Pretenders instinctually gravitate toward those with power and privilege. Now their sphere of possible targets has widened to include the many life forms of an increasingly complex Cosmos.\""
        },
        "flare": {
            "wild": {
                "pt": "Como ataque, após o destino ser comprado, você pode usar este poder para pegar sua(s) ficha(s) de alienígena e tudo sobre elas e mover-se para o que você considera ser o melhor assento. O jogador naquele assento pega sua(s) ficha(s) de alienígena e move-se para o seu assento.",
                "en": "As the offense, after destiny is drawn, you may use this power to take your alien sheet(s) and everything on them and move to what you consider to be the best seat. The player in that seat takes his or her alien sheet(s) and moves to your seat.",
                "timing": {
                    "player": {
                        "pt": "Não Ataque",
                        "en": "Not Offense"
                    },
                    "phases": {
                        "startTurn": true,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": false,
                        "reveal": false,
                        "resolution": false
                    }
                }
            },
            "super": {
                "pt": "Como aliado, após o destino ser comprado, você pode usar este poder para pegar sua(s) ficha(s) de alienígena e tudo sobre elas e mover-se para o que você considera ser o melhor assento. O jogador naquele assento pega sua(s) ficha(s) de alienígena e move-se para o seu assento.",
                "en": "As an ally, after destiny is drawn, you may use this power to take your alien sheet(s) and everything on them and move to what you consider to be the best seat. The player in that seat takes his or her alien sheet(s) and moves to your seat.",
                "timing": {
                    "player": {
                        "pt": "Apenas Ataque",
                        "en": "Offense Only"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": true,
                        "launch": false,
                        "alliance": false,
                        "planning": false,
                        "reveal": false,
                        "resolution": false
                    }
                }
            }
        },
        "timing": {
            "player": {
                "pt": "Apenas Ataque",
                "en": "Offense Only"
            },
            "choice": {
                "pt": "Opcional",
                "en": "Optional"
            },
            "phases": {
                "startTurn": false,
                "regroup": false,
                "destiny": true,
                "launch": false,
                "alliance": false,
                "planning": false,
                "reveal": false,
                "resolution": false
            }
        }
    },
    {
        "id": "sheriff",
        "expansion": "Cosmic Eons",
        "name": {
            "pt": "Sheriff",
            "en": "Sheriff"
        },
        "aka": "Xerife",
        "summary": {
            "pt": "Cumprir a Lei",
            "en": "Upholds the Law"
        },
        "power": {
            "pt": "<b>Você tem o poder de Multar.</b> Uma vez durante o turno de cada jogador, você <b>pode usar</b> este poder para escolher uma notificação da sua reserva de cartas de essence e pode descartá-la ou dá-la para qualquer jogador que está cometendo a infração da notificacão e tem as cartas ou naves necessárias para pagar a multa. Aquele jogador imediatamente paga a multa. Se a multa for em cartas, você as escolhe aleatoriamente da mão dele ou dela. Se a multa for em naves, o jogador escolhe quais naves dele ou dela perder. O jogador mantém o bilhete virado para cima.<br/><br/>Assim que a multa for paga, você <b>pode usar</b> este poder para confiscá-la como uma gratificação. Adicione algumas ou todas as cartas para a sua mão ao invés de descartá-las ou recupere um número de naves do warp até o número multado. Então o jogador vira a notificação para baixo e ganha imunidade contra notificações futuras enquanto ele ou ela tem a notificação virada para baixo. Quando todos os outros jogadores tiverem imunidade ou você não tiver notificações, todas as notificações voltam para você.",
            "en": "<b>You have the power to Ticket.</b> Once during each player's turn, you <b>may use</b> this power to choose a ticket from your essence card cache and either discard it, or give it to any player who is committing the infraction on that ticket and has the cards or ships needed to pay the fine. That player immediately pays the fine. If the fine is in cards, you select them at random from his or her hand. If the fine is in ships, the player chooses which of his or her ships to lose. The player keeps the ticket faceup.<br/><br/>As the fine is being paid, you <b>may use</b> this power to seize it as a gratuity. Add some or all of the cards to your hand instead of discarding them, or retrieve a number of your ships from the warp up to the number fined. Then the player flips the ticket facedown and gains immunity against further tickets while he or she has a facedown ticketWhen all other players have immunity or you have no tickets remaining, all tickets are returned to you."
        },
        essence: {
            "name": {
                "pt": "Multa",
                "en": "Ticket"
            },
            "list": {
                "1": {
                    "name": {
                        "pt": "Força Excessiva",
                        "en": "Excessive Force"
                    },
                    "body": {
                        "pt": "Infração: Vencer um encontro por mais de 10 ou revelar uma carta de ataque de 20 ou mais como jogador principal. Multa: Descarte três cartas.",
                        "en": "Infraction: Winning an encounter by more than 10 or revealing an attack card of 20 or higher as a main player. Fine: Discard three cards."
                    }
                },
                "2": {
                    "name": {
                        "pt": "Engarrafamento",
                        "en": "Gridlock"
                    },
                    "body": {
                        "pt": "Infração: Ter mais de dez naves no warp. Multa: Descarte duas cartas.",
                        "en": "Infraction: Having more than ten ships in the warp. Fine: Discard two cards."
                    }
                },
                "3": {
                    "name": {
                        "pt": "Estacionamento Ilegal",
                        "en": "Illegal Parking"
                    },
                    "body": {
                        "pt": "Infração: Ter mais de quatro de suas naves em um planeta. Multa: Descarte uma carta.",
                        "en": "Infraction: Having more than four of your ships on a planet. Fine: Discard one card."
                    }
                },
                "4": {
                    "name": {
                        "pt": "Jogar Lixo",
                        "en": "Littering"
                    },
                    "body": {
                        "pt": "Infração: Descartar mais de três cartas de uma vez. Multa: Perca duas naves para o warp.",
                        "en": "Infraction: Discarding more than three cards at one time. Fine: Lose two ships to the warp."
                    }
                },
                "5": {
                    "name": {
                        "pt": "Vadiagem",
                        "en": "Loitering"
                    },
                    "body": {
                        "pt": "Infração: Não aceitar um convite de aliança. Multa: Descarte uma carta.",
                        "en": "Infraction: Not accepting an alliance invitation. Fine: Discard one card."
                    }
                },
                "6": {
                    "name": {
                        "pt": "Obstrução",
                        "en": "Obstruction"
                    },
                    "body": {
                        "pt": "Infração: Cancelar a carta ou ação de um jogador. Multa: Descarte duas cartas.",
                        "en": "Infraction: Canceling a player's card or action. Fine: Discard two cards."
                    }
                },
                "7": {
                    "name": {
                        "pt": "Mendicância",
                        "en": "Panhandling"
                    },
                    "body": {
                        "pt": "Infração: Poder enviar várias naves como aliado, mas enviar apenas uma. Multa: Perca 2 naves para o warp.",
                        "en": "Infraction: Being able to send multiple ships as an ally but sending only one. Fine: Lose 2 ships to the warp."
                    }
                },
                "8": {
                    "name": {
                        "pt": "Invasão",
                        "en": "Trespassing"
                    },
                    "body": {
                        "pt": "Infração: Apontar o portal do hiperespaço para um planeta com uma ou menos naves. Multa: Perca uma nave para o warp.",
                        "en": "Infraction: Aiming the hyperspace gate at a planet with one or fewer ships. Fine: Lose one ship to the warp."
                    }
                },
                "9": {
                    "name": {
                        "pt": "Vadiagem",
                        "en": "Vagrancy"
                    },
                    "body": {
                        "pt": "Infração: Ter apenas uma nave em uma colônia estrangeira. Multa: Descarte duas cartas.",
                        "en": "Infraction: Having only one ship on a foreign colony. Fine: Discard two cards."
                    }
                }
            }
        },
        "history": {
            "pt": "Os Xerifes reconhecem que pequenos delitos não controlados levarão ao caos. O fato de que o rápido serviço à justiça parece servir a seus próprios sonhos intergalácticos é apenas um subproduto de sua vigilância.",
            "en": "The Sheriffs recognize that minor offenses left unchecked will lead to chaos. That the swift serving of justice seems to serve their own intergalactic dreams is but a by-product of their vigilance.\""
        },
        "flare": {
            "wild": {
                "pt": "Uma vez durante o turno de cada jogador, você pode usar este poder para escolher um bilhete do seu cache de cartas de essência e descartá-lo ou entregá-lo a qualquer jogador que esteja cometendo a infração naquele bilhete e tenha as cartas ou naves necessárias para pagar a multa. Aquele jogador paga a multa imediatamente.",
                "en": "Once during each player's turn, you may use this power to choose a ticket from your essence card cache and either discard it, or give it to any player who is committing the infraction on that ticket and has the cards or ships needed to pay the fine. That player immediately pays the fine.",
                "timing": {
                    "player": {
                        "pt": "Como Qualquer Jogador",
                        "en": "As Any Player"
                    },
                    "phases": {
                        "startTurn": true,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": false,
                        "reveal": false,
                        "resolution": false
                    }
                }
            },
            "super": {
                "pt": "Enquanto a multa está sendo paga, você pode usar este poder para apreendê-la como uma gratificação. Adicione algumas ou todas as cartas à sua mão em vez de descartá-las, ou recupere um número de suas naves do warp até o número multado. Então o jogador vira o bilhete para baixo e ganha imunidade contra novos bilhetes enquanto tiver um bilhete virado para baixo.",
                "en": "As the fine is being paid, you may use this power to seize it as a gratuity. Add some or all of the cards to your hand instead of discarding them, or retrieve a number of your ships from the warp up to the number fined. Then the player flips the ticket facedown and gains immunity against further tickets while he or she has a facedown ticket.",
                "timing": {
                    "player": {
                        "pt": "Como Qualquer Jogador",
                        "en": "As Any Player"
                    },
                    "phases": {
                        "startTurn": true,
                        "regroup": true,
                        "destiny": true,
                        "launch": true,
                        "alliance": true,
                        "planning": true,
                        "reveal": true,
                        "resolution": true
                    }
                }
            }
        },
        "timing": {
            "player": {
                "pt": "Como Qualquer Jogador",
                "en": "As Any Player"
            },
            "choice": {
                "pt": "Opcional",
                "en": "Optional"
            },
            "phases": {
                "startTurn": true,
                "regroup": true,
                "destiny": true,
                "launch": true,
                "alliance": true,
                "planning": true,
                "reveal": true,
                "resolution": true
            }
        }
    },
    {
        "id": "surgeon",
        "expansion": "Cosmic Eons",
        "name": {
            "pt": "Surgeon",
            "en": "Surgeon"
        },
        "aka": "Cirurgião",
        "summary": {
            "pt": "Oferece Plásticas Para Aliens",
            "en": "Gives Aliens Facelifts"
        },
        "power": {
            "pt": "<b>Preparação de Jogo:</b> Compre três cartas de flare do baralho não usado de flares e coloque-as viradas para baixo nesta ficha como \"plásticas.\" As plásticas não fazem parte da sua mão. Você pode olhá-las a qualquer hora.<br/><br/><b>Você tem o poder da Cirurgia.</b> Se você não é um jogador principal, depois da carta de destino ser comprada, você <b>pode usar</b> este poder para escolher qualquer outro jogador como o seu \"paciente\" e oferecer aquele jogador uma flare coringa como uma plástica. Mostre uma flare desta ficha para o paciente como um possível melhoramento para o poder do alien dele ou dela e ofereça-a em troca por qualquer coisa que o paciente possa dar a você como parte de um acordo. Se vocês dois concordarem, coloque a plástica virada para cima próxima à ficha do alien paciente como uma parte temporária daquele poder de alien e compre um substituto para esta ficha da pilha não usada de flares. Se você não concordar, retorne a plástica para esta ficha.<br/><br/>Se você escolher não oferecer uma plástica, ao invés disso você <b>pode usar</b> este poder para descartar uma ou mais plásticas desta ficha e então comprar substitutas do baralho não utilizado de flares até você ter três.<br/><br/>Um paciente pode usar o seu poder de alien aprimorado para ativar uma de suas plásticas sempre que for apropriado, mesmo que você tenha perdido este poder. O uso das plásticas não conta como se estivesse jogando uma flare mas é uma extensão do poder do alien. Depois que uma plástica for usada ou cancelada (Cosmic Zap), ela é removida do jogo.",
            "en": "<b>Game Setup:</b> Draw three flares from the unused flare deck and place them facedown on this sheet as \"facelifts.\" The facelifts are not part of your hand. You may look at them at any time.<br/><br/><b>You have the power of Surgery.</b> If you are not a main player, after destiny is drawn, you <b>may use</b> this power to choose any other player as your \"patient\" and offer that player a wild flare as a facelift. Show one flare from this sheet to the patient as a possible improvement for his or her alien power, and offer it in exchange for anything the patient could give you as part of a deal. If the two of you agree, place the facelift faceup next to the patient's alien sheet as a temporary part of that alien power and draw a replacement for this sheet from the unused flare deck. If you do not agree, return the facelift to this sheet.<br/><br/>If you choose not to offer a facelift, instead you <b>may use</b> this power to discard one or more facelifts from this sheet, and then draw replacements from the unused flare deck until you have three.<br/><br/>A patient may use his or her improved alien power to activate one of its facelifts whenever appropriate, even if you have lost this power. The facelift use does not count as playing a flare, but is an extension of that alien's power. After a facelift is used or Cosmic Zapped, it is removed from the game."
        },
        "history": {
            "pt": "Nada supera um \"corte cósmico\" por um Cirurgião… pequena taxa exigida.",
            "en": "Nothing beats a \"cosmic cut\" by a Surgeon… small fee required.\""
        },
        "flare": {
            "wild": {
                "pt": "Se você não for um jogador principal, após o destino ser comprado, você pode usar este poder para escolher qualquer outro jogador como seu 'paciente' e oferecer a esse jogador uma flare selvagem como um lifting facial. Mostre uma flare desta ficha ao paciente como uma possível melhoria para seu poder alienígena e ofereça-a em troca de qualquer coisa que o paciente poderia lhe dar como parte de um acordo.",
                "en": "If you are not a main player, after destiny is drawn, you may use this power to choose any other player as your \"patient\" and offer that player a wild flare as a facelift. Show one flare from this sheet to the patient as a possible improvement for his or her alien power, and offer it in exchange for anything the patient could give you as part of a deal.",
                "timing": {
                    "player": {
                        "pt": "Como Qualquer Jogador",
                        "en": "As Any Player"
                    },
                    "phases": {
                        "startTurn": true,
                        "regroup": true,
                        "destiny": true,
                        "launch": true,
                        "alliance": true,
                        "planning": true,
                        "reveal": true,
                        "resolution": true
                    }
                }
            },
            "super": {
                "pt": "Se você optar por não oferecer um lifting facial, em vez disso você pode usar este poder para descartar um ou mais liftings faciais desta ficha e, em seguida, comprar substituições do baralho de flares não utilizadas até ter três.",
                "en": "If you choose not to offer a facelift, instead you may use this power to discard one or more facelifts from this sheet, and then draw replacements from the unused flare deck until you have three.",
                "timing": {
                    "player": {
                        "pt": "Apenas Ataque",
                        "en": "Offense Only"
                    },
                    "phases": {
                        "startTurn": true,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": false,
                        "reveal": false,
                        "resolution": false
                    }
                }
            }
        },
        "timing": {
            "player": {
                "pt": "Não Jogador Principal",
                "en": "Not Main Player"
            },
            "choice": {
                "pt": "Opcional",
                "en": "Optional"
            },
            "phases": {
                "startTurn": false,
                "regroup": false,
                "destiny": true,
                "launch": false,
                "alliance": false,
                "planning": false,
                "reveal": false,
                "resolution": false
            }
        }
    },
    {
        "id": "the_cult",
        "expansion": "Cosmic Eons",
        "name": {
            "pt": "The Cult",
            "en": "The Cult"
        },
        "aka": "O Culto",
        "summary": {
            "pt": "Recruta Membros",
            "en": "Recruits Members"
        },
        "power": {
            "pt": "<b>Você tem o poder da Fidelidade.</b> Como um jogador principal, antes dos aliados serem convidados, você <b>pode usar</b> este poder para oferecer a seu oponente filiação no Culto se ele ou ela ainda não for um membro. Se o seu oponente aceita, ele ou ela coloca uma das naves dele ou dela de qualquer colônia nesta ficha. Membros do Culto estão ligados pelas seguintes regras:\n        <br/>• Quando ambos os jogadores principais estão no Culto, nenhuma aliança é permitida e todas as cartas de encontro reveladas que não são negociação viram negociação.\n        <br/>• Quando somente um jogador principal pertence ao Culto, todas as naves de todos os membros do Culto que estão em colônias estrangeiras no sistema alvo mas não envolvidas no encontro contarão como 1 cada do total dos membros do Culto. Estas naves irão para o warp se o membro do Culto perder.\n        <br/>• Um membro do Culto não pode se aliar por vontade própria contra outro membro do Culto.\n        <br/>• Um jogo vencido por um membro do Culto é uma vitória para todos os membros do Culto.<br/><br/>Quando qualquer outro membro do Culto é um jogador principal, antes dos aliados serem convidados, aquele jogador pode perder quatro naves para o warp e descartar quatro cartas da mão dele ou dela para renunciar ao Culto. A nave nesta ficha dele ou dela retorna para qualquer colônia. Aquele jogador não é mais um membro.",
            "en": "<b>You have the power of Allegiance.</b> As a main player, before allies are invited, you <b>may use</b> this power to offer your opponent membership in The Cult if he or she is not already a member. If your opponent accepts, he or she places one of his or her ships on this sheet from any colony. Members of The Cult are bound by the following rules:\n        <br/><b>• When both main players are in The Cult, no alliances are allowed and all revealed encounter cards that are not negotiates become negotiates.\n        <br/>• When only one main player belongs to The Cult, all ships of all members of The Cult that are on foreign colonies in the targeted system but not involved in the encounter will count as 1 each toward The Cult member's total. These ships will go to the warp if The Cult member loses.\n        <br/>• A Cult member may not willingly ally against another Cult member.\n        <br/>• A game win for a member of The Cult is a win for all members of The Cult.<br/><br/>When any other member of The Cult is a main player, before allies are invited, that player may lose four ships to the warp and discard four cards from his or her hand to renounce The Cult. His or her ship on this sheet returns to any colony. That player is no longer a member."
        },
        "history": {
            "pt": "Antes um retiro religioso, o Culto agora está expandindo seu fervor para outros sistemas cósmicos.",
            "en": "Once a religious retreat, The Cult is now expanding their fervor to other Cosmic systems.\""
        },
        "flare": {
            "wild": {
                "pt": "Como jogador principal, antes de os aliados serem convidados, você pode usar este poder para oferecer ao seu oponente a adesão ao Culto, se ele ou ela ainda não for um membro. Se o seu oponente aceitar, ele ou ela coloca uma de suas naves nesta ficha de qualquer colônia.",
                "en": "As a main player, before allies are invited, you may use this power to offer your opponent membership in The Cult if he or she is not already a member. If your opponent accepts, he or she places one of his or her ships on this sheet from any colony.",
                "timing": {
                    "player": {
                        "pt": "Apenas Jogador Principal",
                        "en": "Main Player Only"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": true,
                        "reveal": false,
                        "resolution": false
                    }
                }
            },
            "super": {
                "pt": "Quando qualquer outro membro do Culto for um jogador principal, antes de os aliados serem convidados, aquele jogador pode perder quatro naves para o warp e descartar quatro cartas de sua mão para renunciar ao Culto. Sua nave nesta ficha retorna para qualquer colônia. Aquele jogador não é mais um membro.",
                "en": "When any other member of The Cult is a main player, before allies are invited, that player may lose four ships to the warp and discard four cards from his or her hand to renounce The Cult. His or her ship on this sheet returns to any colony. That player is no longer a member.",
                "timing": {
                    "player": {
                        "pt": "Como Qualquer Jogador",
                        "en": "As Any Player"
                    },
                    "phases": {
                        "startTurn": true,
                        "regroup": true,
                        "destiny": true,
                        "launch": true,
                        "alliance": true,
                        "planning": true,
                        "reveal": true,
                        "resolution": true
                    }
                }
            }
        },
        "timing": {
            "player": {
                "pt": "Apenas Jogador Principal",
                "en": "Main Player Only"
            },
            "choice": {
                "pt": "Opcional",
                "en": "Optional"
            },
            "phases": {
                "startTurn": false,
                "regroup": false,
                "destiny": false,
                "launch": false,
                "alliance": true,
                "planning": false,
                "reveal": false,
                "resolution": false
            }
        }
    },
    {
        "id": "tortoise",
        "expansion": "Cosmic Eons",
        "name": {
            "pt": "Tortoise",
            "en": "Tortoise"
        },
        "aka": "Cágado",
        "summary": {
            "pt": "Começa Tarde",
            "en": "Gets a Late Start"
        },
        "power": {
            "pt": "<b>Você tem o poder de Perder Tempo.</b> Ao início de cada um dos seus turnos, <b>use</b> este poder para receber quatro recompensas e finalizar o seu turno.<br/><br/>Cada vez que você comprar uma carta como recompensa, compre a carta do topo do baralho apropriado ou da pilha de descarte. Quaisquer ou todas as cartas que você comprar como recompensa podem ser colocadas viradas para baixo nesta ficha em seu \"casco.\" Seu casco não é parte da sua mão e não pode ser usado até o final do jogo, mas você pode olhá-lo a qualquer hora.<br/><br/>Quando o jogo termina, se você não tiver perdido este poder, adicione todas as cartas do seu casco para sua mão. Se você não é um dos vencedores, faça um turno final. Você não pode <b>usar</b> este poder para ganhar recompensas e nenhum outro jogador pode se tornar o atacante independente de outros efeitos de jogo. Você pode ter tantos encontros que puder mesmo se eles não forem bem sucedidos e mesmo se perder teste poder, até você ficar sem cartas de encontro ou ganhar o jogo, compartilhando a vitória com todos os outros jogadores que agora estão alcançando uma condição de vitória, se tiver.<br/><br/>Sempre que você for parte de uma vitória compartilhada, se você não tiver perdido este poder, você pode aceitar a vitória compartilhada ou tentar vencer sozinho tendo mais um encontro (se você ainda tiver uma carta de encontro). Os outros jogadores que são parte da vitória compartilhada não podem aliar-se com você. Se você ganhar uma colônia estrangeira, você vence sozinho. Senão, você perde o jogo e os outros vencedores vencem.",
            "en": "<b>You have the power to Dawdle.</b> At the start of each of your turns, <b>use</b> this power to receive four rewards and end your turn.<br/><br/>Each time you draw a card as a reward, draw the top card from an appropriate deck or discard pile. Any or all cards you draw as rewards may be placed facedown on this sheet in your \"shell.\" Your shell is not part of your hand and may not be used until the end of the game, but you may look at it at any time.<br/><br/>When the game ends, if you have not lost this power, add all cards in your shell to your hand. If you are not one of the winners, take one final turn. You cannot <b>use</b> this power to gain rewards and no other players may become the offense regardless of other game effects. You may have as many encounters as you can, even if they are not successful and even if you lose this power, until you either run out of encounter cards or become a winner, sharing the win with all other players who are now achieving a victory condition, if any.<br/><br/>Whenever you are part of a shared win, if you have not lost this power you may either accept the shared win or attempt to win alone by having one more encounter (if you still have an encounter card). Other players who were part of the shared win may not ally with you. If you gain a foreign colony, you win alone. If not, you lose the game and the other winner(s) win."
        },
        "history": {
            "pt": "Os Cágados chocam a todos movendo a linha de chegada para onde eles sozinhos possam se aventurar.",
            "en": "The Tortoises shock all by moving the finish line to where they alone can venture.\""
        },
        "flare": {
            "wild": {
                "pt": "No início de cada um dos seus turnos, você pode usar este poder para receber quatro recompensas e terminar seu turno.",
                "en": "At the start of each of your turns, you may use this power to receive four rewards and end your turn.",
                "timing": {
                    "player": {
                        "pt": "Apenas Ataque",
                        "en": "Offense Only"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": false,
                        "launch": false,
                        "alliance": false,
                        "planning": false,
                        "reveal": false,
                        "resolution": true
                    }
                }
            },
            "super": {
                "pt": "Quando o jogo terminar, se você não tiver perdido este poder, adicione todas as cartas em sua carapaça à sua mão. Se você não for um dos vencedores, jogue um turno final. Você não pode usar este poder para ganhar recompensas e nenhum outro jogador pode se tornar o ataque, independentemente de outros efeitos do jogo. Você pode ter quantos encontros puder, mesmo que não sejam bem-sucedidos e mesmo que perca este poder, até ficar sem cartas de encontro ou se tornar um vencedor, compartilhando a vitória com todos os outros jogadores que agora estão alcançando uma condição de vitória, se houver.",
                "en": "When the game ends, if you have not lost this power, add all cards in your shell to your hand. If you are not one of the winners, take one final turn. You cannot use this power to gain rewards and no other players may become the offense regardless of other game effects. You may have as many encounters as you can, even if they are not successful and even if you lose this power, until you either run out of encounter cards or become a winner, sharing the win with all other players who are now achieving a victory condition, if any.",
                "timing": {
                    "player": {
                        "pt": "Apenas Defesa",
                        "en": "Defense Only"
                    },
                    "phases": {
                        "startTurn": false,
                        "regroup": false,
                        "destiny": true,
                        "launch": false,
                        "alliance": false,
                        "planning": false,
                        "reveal": false,
                        "resolution": false
                    }
                }
            }
        },
        "timing": {
            "player": {
                "pt": "Apenas Ataque",
                "en": "Offense Only"
            },
            "choice": {
                "pt": "Obrigatório",
                "en": "Mandatory"
            },
            "phases": {
                "startTurn": true,
                "regroup": false,
                "destiny": false,
                "launch": false,
                "alliance": false,
                "planning": false,
                "reveal": false,
                "resolution": false
            }
        }
    }
);