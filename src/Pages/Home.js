import logo from "../assets/logoheader.svg";
import React from "react";
import playStoreFooter from "../assets/playstoreFooter.svg";
import appleFooter from "../assets/appleStoreFooter.svg";
import {
  Header,
  HeaderButtonsdiv,
  HeaderButton,
  Dash,
  ImgWrapper,
  LoginButton,
  Root,
  Header2,
  Footer,
  TitleWrapper,
  Title,
} from "./Home.jsx";

function Home() {
  return (
    <Root>
      <Header>
        <ImgWrapper>
          <img
            src={logo}
            alt="logo Blu"
            onClick={() => window.open("https://bluvalida.com.br/", "__blank")}
          />
        </ImgWrapper>
        <HeaderButtonsdiv>
          <HeaderButton
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send/?phone=558597230019&text&type=phone_number&app_absent=0",
                "__blank"
              )
            }
            className="Go"
          >
            Contato
          </HeaderButton>
          <HeaderButton
            onClick={() => window.open("https://bluvalida.com.br/", "__blank")}
            className="Go"
          >
            Página Inicial
          </HeaderButton>
          <Dash>|</Dash>
          <HeaderButton
            onClick={() => window.open("https://bluvalida.com.br/", "__blank")}
            className="Go"
          >
            <LoginButton>Login</LoginButton>
          </HeaderButton>
        </HeaderButtonsdiv>
      </Header>
      <Header2>
        <span>Termos de Uso</span>
      </Header2>
      <TitleWrapper>
        <Title>Relacionamento Contratual:</Title>
      </TitleWrapper>
      <p>
        Estes termos de uso regem seu acesso e uso, como usuário, dentro do
        Brasil, de aplicativos, sites de Internet, conteúdos e também serviços
        disponibilizados pela Blu Comercio e Serviços Hídricos LTDA ME. com sede
        na Rua Vicente Linhares, 521, Térreo, Sala 5, CEP 60135-270, Aldeota, no
        município de Fortaleza/CE, inscrita no CNPJ sob o nº. 09.182.308/0001-70
        (“Blu”).
      </p>
      <p>
        POR FAVOR, LEIA COM ATENÇÃO ESTES TERMOS ANTES DE ACESSAR OU USAR OS
        SERVIÇOS.
      </p>
      <p>
        Ao acessar e usar os Serviços você concorda com os presentes termos e
        condições, que estabelecem o relacionamento contratual entre você, na
        qualidade de usuário(a), e a Blu. Se você não concorda com estes Termos,
        você não pode acessar nem usar os Serviços. Mediante referido acesso e
        uso, estes Termos imediatamente encerram, substituem e superam todos os
        acordos, Termos e acertos anteriores entre você e a Blu. A Blu poderá
        imediatamente encerrar estes Termos ou quaisquer Serviços em relação a
        você ou, de modo geral, deixar de oferecer ou negar acesso aos Serviços
        ou a qualquer parte deles, a qualquer momento e por qualquer motivo. A
        Blu poderá alterar os Termos relativos aos Serviços a qualquer momento.
        Aditamentos entrarão em vigor quando a Blu fizer a postagem da versão
        atualizada dos Termos neste local ou das condições atualizadas ou Termos
        adicionais sobre o respectivo Serviço. O fato de você continuar a
        acessar ou usar os Serviços após essa postagem representa seu
        consentimento em vincular-se aos Termos alterados. A coleta e utilização
        pela Blu de dados pessoais associados aos Serviços são feitas de acordo
        com o Aviso de Privacidade da Blu, que pode ser consultado em{" "}
        <a
          href="https://politica-de-privacidade-five.vercel.app/"
          target="blank"
        >
          Politica de Privacidade.
        </a>
      </p>
      <TitleWrapper>
        <Title>1 - Aceitação dos Termos e da LGPD:</Title>
      </TitleWrapper>
      <p>
        Ao utilizar nossos serviços, você concorda com estes Termos Gerais de
        Uso, bem como com a Politica de Privacidade e outros termos e condições
        específicas de cada serviço oferecido pelo aplicativo, em conformidade
        com a LGPD. Se você não concorda com esses termos, não utilize nossos
        serviços.
      </p>
      <TitleWrapper>
        <Title>2 - Licença:</Title>
      </TitleWrapper>
      <p>
        Sujeito ao cumprimento destes Termos, a Blu outorga a você uma licença
        limitada, não exclusiva, não passível de sub licença, revogável e não
        transferível para:
      </p>
      <ol>
        <li>
          Acesso e uso dos Aplicativos em seu dispositivo pessoal,
          exclusivamente para o seu uso dos Serviços;{" "}
        </li>
        <li>
          Acesso e uso de qualquer conteúdo, informação e material correlato que
          possa ser disponibilizado por meio dos Serviços, em cada caso, para
          seu uso pessoal, nunca comercial.{" "}
        </li>
      </ol>
      <TitleWrapper>
        <Title>3 - Termos de serviço:</Title>
      </TitleWrapper>
      <p>
        O aplicativo Blu Valida coleta informações pessoais e bancárias dos
        usuários para fins de envio e recebimento de boletos bancários, por meio
        de uma plataforma segura e de fácil utilização, para usuários tanto
        pessoa física quanto jurídica, permitir que empresas parceiras enviem
        boletos bancários aos seus clientes, mediante autorização prévia do
        usuário, cadastro de usuários, para utilização dos serviços oferecidos
        pelo aplicativo, atualização de dados cadastrais dos usuários, para
        manter as informações precisas e atualizadas e inserção de dados
        bancários pelos usuários, para facilitar o recebimento de pagamentos por
        meio do aplicativo, envio e recebimento de e-mail ou SMS para
        confirmação de conta e entrar em contato com o remetente. Todas as
        finalidades acima estão em conformidade com a Lei Geral de Proteção de
        Dados (LGPD) e visam proporcionar uma experiência segura e eficiente aos
        usuários do aplicativo. Ao utilizar este aplicativo, você concorda em
        fornecer informações precisas e atualizadas e concorda com a coleta, uso
        e armazenamento de suas informações pessoais e bancárias de acordo com
        estes termos de serviço.
      </p>

      <TitleWrapper>
        <Title>4 - Serviços oferecidos:</Title>
      </TitleWrapper>

      <p>
        O aplicativo permite que usuários, tanto pessoa física quanto jurídica,
        recebam boletos bancários, por meio de uma plataforma segura e de fácil
        utilização. O aplicativo também permite que empresas parceiras enviem
        boletos bancários aos seus clientes, mediante autorização prévia do
        usuário. O aplicativo não é responsável pelo conteúdo dos boletos ou
        pelas informações fornecidas pelos usuários. Os dados coletados pelo
        aplicativo são tratados em conformidade com a LGPD.
      </p>

      <TitleWrapper>
        <Title>5 - Registro e Segurança:</Title>
      </TitleWrapper>

      <p>
        Para utilizar nossos serviços, é necessário realizar o registro no
        aplicativo, fornecendo informações precisas e atualizadas, em
        conformidade com a LGPD. Você é responsável pela segurança da sua conta
        e deve manter a confidencialidade de sua senha. Caso suspeite de uso não
        autorizado de sua conta, entre em contato conosco imediatamente.
      </p>

      <TitleWrapper>
        <Title>6 - Propriedade Intelectual:</Title>
      </TitleWrapper>

      <p>
        O aplicativo e todo o conteúdo relacionado, incluindo, mas não se
        limitando à, logotipos, textos, imagens, vídeos, gráficos, códigos e
        software, são de propriedade do aplicativo ou de seus licenciadores. É
        proibida a reprodução, distribuição, modificação ou uso não autorizado
        deste conteúdo.
      </p>

      <TitleWrapper>
        <Title>7 - Limitação de Responsabilidade:</Title>
      </TitleWrapper>

      <p>
        O aplicativo não se responsabiliza por perdas, danos ou prejuízos
        decorrentes do uso de nossos serviços, incluindo interrupções ou falhas
        técnicas. O aplicativo também não é responsável pelo conteúdo dos
        boletos enviados pelos usuários. Todos os dados coletados pelo
        aplicativo são tratados em conformidade com a LGPD.
      </p>

      <TitleWrapper>
        <Title>8 - Coleta de dados:</Title>
      </TitleWrapper>

      <p>
        O aplicativo coleta informações pessoais, incluindo nome completo,
        endereço, número de telefone, endereço de e-mail, endereço e registro
        nacional. Para empresas parceiras além dos dados pessoais de um
        representante e dados da empresa coletamos também informações bancárias,
        incluindo número de conta bancária, agência de conta bancária, dígitos
        de conta bancária, dígito de agência bancária, banco referente e
        contrato social com a Blu.
      </p>

      <p>
        Para aproveitamento regular e integral dos serviços prestados, o Cliente
        deverá informar e enviar, além de outros dados e documentos:
      </p>

      <ol>
        <li>
          cópia da identidade e selfie (foto tirada pelo próprio titular) e/ou
          conta bancária de titularidade própria, a ser mantida no Brasil
          durante toda a vigência deste Contrato, junto a uma Instituição
          Financeira regularmente constituída ou autorizada a funcionar no
          território nacional (com o fim de Validação de identidade, prevenção à
          lavagem de dinheiro e possibilitar o saque de valores via conta
          bancária);
        </li>
        <li>
          endereço de e-mail válido (indispensável para login na plataforma);
        </li>
        <li>
          número de telefone celular válido (utilizado para Validações de
          segurança no cadastro);
        </li>
        <li>
          número de inscrição no Cadastro de Pessoas Físicas do Ministério da
          Fazenda(CPF/MF); data de nascimento; endereço residencial e atividade
          principal;
        </li>
        <li>
          para Cliente Pessoa Jurídica, além dos dados e documentos constantes
          no item “a”, “b” e “c” deverá apresentar número de inscrição no
          Cadastro Nacional de Pessoa Jurídica (CNPJ); atividade principal;
          endereço, bem como, poderão ser solicitados documentos de constituição
          da empresa, como Contrato Social e Estatuto Social, e/ou procuração,
          bem como, serão coletadas as informações relativas aos sócios da
          empresa.
        </li>
      </ol>

      <TitleWrapper>
        <Title>9 - Como o Blu Valida usa seus dados pessoais:</Title>
      </TitleWrapper>

      <p>Dados pessoais informados pelo titular:</p>
      <p>Finalidades: </p>
      <ul>
        <li>Prestação dos serviços e oferecimento dos produtos contratados.</li>
        <li>
          Identificação, autenticação e verificação de requisitos para
          contratação dos serviços e produtos da Blu.
        </li>
        <li>
          Marketing, prospecção, pesquisa de mercado, de opinião e promoção de
          nossos produtos e serviços, ou de nossos parceiros, inclusive a
          viabilização.
        </li>
        <li>Cumprimento de obrigação legal ou regulatória. </li>
        <li>
          Prevenção à fraude e garantia de sua segurança nos processos de
          identificação e autenticação de cadastro.
        </li>
        <li>
          Investigação e medidas de prevenção e combate a ilícitos, fraudes,
          crimes financeiros e garantia da segurança dos clientes do Blu Valida.
        </li>
        <li>Atendimento de solicitações e dúvidas.</li>
        <li>
          Contato por telefone, e-mail, SMS, WhatsApp, ou outros meios de
          comunicação, inclusive para envio de notificações ou push de uso dos
          serviços do Blu Valida.
        </li>
        <li>Prevenção e resolução de problemas técnicos ou de segurança.</li>
        <li>
          Colaboração ou cumprimento de ordem judicial, de autoridade competente
          ou de órgão fiscalizador.
        </li>
      </ul>

      <p>Titularidade dos Dados e direitos:</p>
      <ul>
        <li>
          Direito de confirmação: confirmar a existência de tratamento de seus
          dados pessoais;
        </li>
        <li>Direito de acesso: solicitar detalhes de seus dados;</li>
        <li>
          Direito a correção: corrigir ou remover eventuais dados pessoais que
          estejam incompletos, inexatos ou desatualizados;
        </li>
        <li>
          Direito de anonimização, bloqueio ou eliminação: solicitar a
          anonimização, bloqueio ou eliminação de dados desnecessários,
          excessivos ou tratados em desconformidade com esta Política ou demais
          normas do ordenamento jurídico. Nesses casos, se houver anonimização,
          bloqueio ou exclusão de dados que prejudiquem sua manutenção em
          programas de fidelidade ou promoções, o contrato poderá ser
          rescindido;
        </li>
        <li>
          Direito de recusar marketing: solicitar o cancelamento de recebimento
          de nossas campanhas e materiais;
        </li>
        <li>
          Direito de revogação do consentimento: quando a base legal para o
          tratamento de dados for o consentimento, você poderá revogá-lo. É
          importante que você saiba que o cancelamento não afetará a utilização
          ou compartilhamento dos dados realizados anteriormente ao pedido de
          revogação.
        </li>
      </ul>

      <TitleWrapper>
        <Title>Dados biométricos:</Title>
      </TitleWrapper>

      <p>Finalidades:</p>

      <ul>
        <li>
          Prevenção à fraude e garantia da sua segurança nos processos de
          identificação e autenticação de cadastro e de novo dispositivo.
        </li>
      </ul>

      <TitleWrapper>
        <Title>
          Parceiros de negócios, prestadores de serviço e outros terceiros:
        </Title>
      </TitleWrapper>

      <p>Finalidades: </p>

      <ul>
        <li>
          Aprimoramento dos nossos serviços, website e aplicativo e
          operacionalização de novos produtos ou serviços.
        </li>
        <li>
          Checagem da sua identidade e elegibilidade para contratar os serviços
          do Blu Valida, e reavaliações periódicas.{" "}
        </li>
        <li>
          Investigações e medidas de prevenção e combate a ilícitos, fraudes,
          crimes financeiros e garantia da segurança dos clientes do Blu Valida
          e do sistema financeiro.
        </li>
      </ul>

      <TitleWrapper>
        <Title>10 - Alterações nos Termos Gerais de Uso:</Title>
      </TitleWrapper>

      <p>
        O aplicativo se reserva o direito de alterar estes Termos Gerais de Uso
        a qualquer momento, sem aviso prévio. É de responsabilidade do usuário
        revisar os termos periodicamente, em conformidade com a LGPD.
      </p>

      <TitleWrapper>
        <Title>11 - Lei aplicável, Jurisdição e LGPD:</Title>
      </TitleWrapper>

      <p>
        Estes Termos Gerais de Uso serão regidos e interpretados de acordo com
        as leis brasileiras, em conformidade com a LGPD. Eventuais disputas
        decorrentes do uso de nossos serviços serão submetidas à jurisdição
        brasileira. O aplicativo está comprometido em cumprir a LGPD e proteger
        a privacidade e os dados pessoais dos usuários.
      </p>

      <TitleWrapper>
        <Title>12 - Consentimento do Usuário:</Title>
      </TitleWrapper>

      <p>
        Ao utilizar este aplicativo, você declara ter lido e compreendido estes
        termos de serviço e concorda com a coleta, uso e armazenamento de suas
        informações pessoais e bancárias de acordo com estes termos de serviço.
        Você também reconhece que o aplicativo pode atualizar estes termos de
        serviço periodicamente, e que é responsabilidade do usuário ler e
        revisar os termos de serviço atualizados antes de continuar a utilizar o
        aplicativo.
      </p>

      <TitleWrapper>
        <Title>13 - Legislação Aplicável; Jurisdição.</Title>
      </TitleWrapper>

      <p>
        Estes Termos serão regidos e interpretados exclusivamente de acordo com
        as leis do Brasil. Qualquer reclamação, conflito ou controvérsia que
        surgir deste contrato ou a ele relacionada, inclusive que diga respeito
        a sua Validade, interpretação ou exequibilidade, será solucionada
        exclusivamente pelos tribunais do foro de seu domicílio.
      </p>

      <Footer>
        Blu Valida 2022. Todos os direitos reservados.
        <p>Precisa de mais ajuda?</p>
        <p>
          Entre em contato com nosso canal de{" "}
          <a
            href="https://api.whatsapp.com/send/?phone=558597230019&text&type=phone_number&app_absent=0"
            target="__blank"
          >
            Suporte
          </a>
          !
        </p>
        <div>
          Download:
          <a
            target="__blank"
            href="https://play.google.com/store/apps/details?id=com.blu.bluvalida"
          >
            <img src={playStoreFooter} alt="googleFooter" />
          </a>
          <img src={appleFooter} alt="appleFooter" />
        </div>
      </Footer>
    </Root>
  );
}

export default Home;
