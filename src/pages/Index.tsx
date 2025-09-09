import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroTablet from "@/assets/hero-tablet.jpg";
import bookPaiRico from "@/assets/book-pai-rico.jpg";
import bookInvestimentos from "@/assets/book-investimentos.jpg";
import bookCarreira from "@/assets/book-carreira.jpg";
import bookMentalidade from "@/assets/book-mentalidade.jpg";
import whatsappTestimonials from "@/assets/whatsapp-testimonials.jpg";
import finalTablet from "@/assets/final-tablet.jpg";
import guaranteeBadge from "@/assets/guarantee-badge.jpg";
import bookSegredos from "@/assets/book-segredos.jpg";
import bookEssencialismo from "@/assets/book-essencialismo.jpg";
import { Volume2, Download, Clock, RefreshCw, Gift } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-8 px-4 text-center bg-gradient-hero">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <img 
                src={heroTablet} 
                alt="Tablet com audiolivros" 
                className="w-full max-w-md mx-auto rounded-lg shadow-card"
              />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <div className="flex items-center gap-2 mb-4">
                <Volume2 className="text-primary w-8 h-8" />
                <span className="text-sm text-muted-foreground">ÁUDIO</span>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold mb-4 text-foreground leading-tight">
                A Chave para o<br />
                Seu Próximo Nível
              </h1>
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg mb-4 inline-block">
                <span className="font-bold text-lg">200 ÁUDIOS</span>
                <span className="ml-2">Best-Sellers</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                que Transformam Sua<br />
                Mentalidade e Potencializam<br />
                seus Resultados Financeiros e Pessoais<br />
                no Único Lugar, com Conteúdos<br />
                Selecionados para Acelerar Seu<br />
                Crescimento Pessoal e<br />
                Profissional
              </p>
              <Button 
                size="lg" 
                className="bg-success hover:bg-success/90 text-success-foreground font-bold px-8 py-4 text-lg rounded-full shadow-button"
              >
                QUERO IR PARA O PRÓXIMO NÍVEL
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Books Categories Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="p-4 text-center shadow-card">
              <img src={bookPaiRico} alt="Pai Rico" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="font-bold text-primary mb-2">FINANÇAS:</h3>
              <p className="text-xs text-muted-foreground leading-tight">
                Domine a linguagem e as técnicas dos milionários para criar e multiplicar suas fontes de renda através do poder do conhecimento especial.
              </p>
            </Card>
            
            <Card className="p-4 text-center shadow-card">
              <img src={bookInvestimentos} alt="Investimentos" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="font-bold text-primary mb-2">INVESTIMENTOS:</h3>
              <p className="text-xs text-muted-foreground leading-tight">
                Explore diversas modalidades de investimentos, melhores estratégias, dicas de mercado e válidos sobre empreendedorismo para lucrar cada vez mais.
              </p>
            </Card>

            <Card className="p-4 text-center shadow-card">
              <img src={bookCarreira} alt="Carreira" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="font-bold text-primary mb-2">CARREIRA:</h3>
              <p className="text-xs text-muted-foreground leading-tight">
                Aprende com Stephen Covey sobre liderança responsabilidade pessoal para alcançar novos patamares na sua vida profissional.
              </p>
            </Card>

            <Card className="p-4 text-center shadow-card">
              <img src={bookMentalidade} alt="Mentalidade" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="font-bold text-primary mb-2">MENTALIDADE:</h3>
              <p className="text-xs text-muted-foreground leading-tight">
                Desenvolva uma mentalidade de sucesso, enriquecimento e transforme suas crenças negativas em programações de conquista e abundância.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8 text-foreground">
            VEJA O QUE NOSSOS LEITORES ESTÃO DIZENDO:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src={whatsappTestimonials} alt="Depoimento WhatsApp 1" className="rounded-lg shadow-lg" />
            <img src={whatsappTestimonials} alt="Depoimento WhatsApp 2" className="rounded-lg shadow-lg" />
            <img src={whatsappTestimonials} alt="Depoimento WhatsApp 3" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg mb-8 text-foreground leading-relaxed">
            O Pack Audio Livros Incríveis é a melhor escolha<br />
            para quem deseja transformar sua mentalidade e<br />
            alcançar a independência financeira.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-sm mb-2">DOWNLOAD<br />ILIMITADO</h3>
              <p className="text-xs text-muted-foreground">
                Para ouvir quantas<br />
                vezes você quiser.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-sm mb-2">ACESSO<br />VITALÍCIO</h3>
              <p className="text-xs text-muted-foreground">
                Acesso a plataforma hoje<br />
                até o último natal das<br />
                nossas vidas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-warning rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-warning-foreground" />
              </div>
              <h3 className="font-bold text-sm mb-2">+ Bônus 3500<br />LIVROS EM<br />PDF</h3>
              <p className="text-xs text-muted-foreground">
                Completando com<br />
                milhares dos melhores<br />
                livros em PDF.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-sm mb-2">ATUALIZAÇÕES</h3>
              <p className="text-xs text-muted-foreground">
                Você terá acesso à<br />
                qualquer atualização<br />
                do produto<br />
                automaticamente.
              </p>
            </div>
          </div>

          <p className="text-sm font-bold mb-6 text-foreground">
            COMPRE AGORA O MELHOR PACK PARA O SEU DESENVOLVIMENTO PESSOAL
          </p>
          
          <Button 
            size="lg" 
            className="bg-success hover:bg-success/90 text-success-foreground font-bold px-12 py-4 text-xl rounded-full shadow-button"
          >
            EU QUERO!
          </Button>
        </div>
      </section>

      {/* Cost Benefit Section */}
      <section className="py-12 px-4 bg-yellow-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-yellow-text">
            O melhor custo e benefício!
          </h2>
          <p className="text-yellow-text mb-8 leading-relaxed">
            Uma simples busca na Google mostra que o valor de um único livro pode ser mais de que o<br />
            investimento que você fará neste pacote, que oferece mais de 3.500 livros e audiolivros em promoção.
          </p>

          <div className="grid grid-cols-1 gap-6 max-w-sm mx-auto">
            <div className="text-center">
              <img src={bookSegredos} alt="Os Segredos da Mente Milionária" className="w-full h-48 object-cover rounded mb-4 shadow-lg" />
              <p className="text-xs font-bold text-yellow-text">
                O segredo da Mente<br />
                Milionária de T. Harv Eker<br />
                Nas livrarias por<br />
                R$ 29,90<br />
                Amazon.com.br
              </p>
            </div>

            <div className="text-center">
              <img src={bookEssencialismo} alt="Essencialismo" className="w-full h-48 object-cover rounded mb-4 shadow-lg" />
              <p className="text-xs font-bold text-yellow-text">
                A Força do Hábito de<br />
                Charles Duhigg do<br />
                Nas livrarias por<br />
                R$ 35,90<br />
                Amazon.com.br
              </p>
            </div>

            <div className="text-center">
              <img src={bookPaiRico} alt="Pai Rico Pai Pobre" className="w-full h-48 object-cover rounded mb-4 shadow-lg" />
              <p className="text-xs font-bold text-yellow-text">
                F-ssim que se Acaba!<br />
                Cristiane Correa<br />
                Nas livrarias por<br />
                R$ 26,07<br />
                Amazon.com.br
              </p>
            </div>

            <div className="text-center">
              <img src={bookMentalidade} alt="Mentalidade" className="w-full h-48 object-cover rounded mb-4 shadow-lg" />
              <p className="text-xs font-bold text-yellow-text">
                O Mar dos peixes<br />
                Nas livrarias por<br />
                R$ 17,55<br />
                Amazon.com.br
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Offer Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <img 
                src={finalTablet} 
                alt="Tablet com audiolivros final" 
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
            </div>
            <div className="w-full md:w-1/2 text-center">
              <div className="border-2 border-destructive bg-destructive/10 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-destructive mb-2">OFERTA</h2>
                <h2 className="text-2xl font-bold text-destructive mb-4">IMPERDÍVEL</h2>
                <p className="text-lg font-bold mb-2">200 ÁUDIOS LIVROS</p>
                <p className="text-sm mb-4">+ Bônus 3.500 Livros<br />em pdf BEST<br />SELLERS</p>
                
                <div className="mb-6">
                  <p className="text-sm line-through text-muted-foreground">de R$ 94,90 por apenas</p>
                  <p className="text-4xl font-bold text-destructive">R$ 19,90</p>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-success hover:bg-success/90 text-success-foreground font-bold px-8 py-4 text-lg rounded-full shadow-button"
                >
                  COMPRAR AGORA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee and FAQ Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 text-center">
              <img src={guaranteeBadge} alt="Garantia 7 dias" className="w-48 h-48 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Garantia de Satisfação</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Dentro deste prazo, você pode solicitar o reembolso integral do seu investimento em até 7 dias. Se não ficar satisfeito por qualquer motivo, nós devolvemos seu dinheiro.
              </p>
            </div>
            
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-bold mb-6 text-center">DÚVIDAS FREQUENTES</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-sm mb-2">COMO VOU RECEBER MEU ACESSO?</h4>
                  <p className="text-xs text-muted-foreground">
                    Assim que aprovarmos seu pagamento, você receberá um e-mail com o link para acesso direto ao seu painel do cliente.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-sm mb-2">POSSO COMPRAR DEPOIS?</h4>
                  <p className="text-xs text-muted-foreground">
                    Esta oferta é exclusiva e limitada a clientes para sempre podem perder essa oportunidade única.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-sm mb-2">POSSO LER E BAIXAR EM QUALQUER DISPOSITIVO?</h4>
                  <p className="text-xs text-muted-foreground">
                    Sim, nossa é compatível com qualquer dispositivo Android e IOS, além de download completo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;