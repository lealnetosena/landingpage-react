import React from 'react';
import { 
  Mic, 
  FileAudio, 
  Zap, 
  Shield, 
  Clock, 
  Download,
  Play,
  CheckCircle,
  Star,
  Users,
  ArrowRight,
  Upload
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Mic className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">TranscribeAI</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#recursos" className="text-gray-600 hover:text-blue-600 transition-colors">Recursos</a>
              <a href="#como-funciona" className="text-gray-600 hover:text-blue-600 transition-colors">Como Funciona</a>
              <a href="#precos" className="text-gray-600 hover:text-blue-600 transition-colors">Preços</a>
              <a href="#contato" className="text-gray-600 hover:text-blue-600 transition-colors">Contato</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-blue-600 transition-colors">Entrar</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Download Grátis
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Zap className="w-4 h-4 mr-2" />
              Transcrição instantânea, sem limites de tamanho
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transforme seus
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> áudios em texto</span>
              <br />com extrema facilidade
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              O aplicativo desktop mais intuitivo para transcrever arquivos de áudio de qualquer tamanho. 
              Arraste, solte e tenha seu texto pronto em minutos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Download className="w-5 h-5 inline mr-2" />
                Download Gratuito
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all">
                <Play className="w-5 h-5 inline mr-2" />
                Ver Demonstração
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-gray-600">100% Gratuito</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-gray-600">Privacidade Total</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-gray-600">Super Rápido</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por que escolher o TranscribeAI?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Desenvolvido para oferecer a melhor experiência em transcrição de áudio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <FileAudio className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sem Limite de Tamanho</h3>
              <p className="text-gray-600 leading-relaxed">
                Transcreva arquivos de áudio de qualquer duração, desde gravações rápidas até 
                podcasts de horas sem limitações.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Extrema Facilidade</h3>
              <p className="text-gray-600 leading-relaxed">
                Interface intuitiva com drag & drop. Arraste seu arquivo, clique em transcrever 
                e pronto. Não pode ser mais simples.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Processamento Rápido</h3>
              <p className="text-gray-600 leading-relaxed">
                IA avançada que processa seus áudios em tempo recorde, mantendo alta 
                precisão na transcrição.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">100% Privado</h3>
              <p className="text-gray-600 leading-relaxed">
                Seus arquivos nunca saem do seu computador. Processamento local garante 
                total privacidade e segurança.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Múltiplos Formatos</h3>
              <p className="text-gray-600 leading-relaxed">
                Suporte para MP3, WAV, M4A, FLAC e mais. Compatível com qualquer 
                formato de áudio que você tenha.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-rose-50 to-rose-100/50 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-rose-600 rounded-xl flex items-center justify-center mb-6">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exportação Flexível</h3>
              <p className="text-gray-600 leading-relaxed">
                Exporte suas transcrições em TXT, DOCX, PDF ou copie diretamente 
                para a área de transferência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Como funciona?
            </h2>
            <p className="text-xl text-gray-600">
              Em apenas 3 passos simples, tenha seu áudio transcrito
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Upload className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Arraste seu arquivo</h3>
              <p className="text-gray-600">
                Simplesmente arraste e solte seu arquivo de áudio na interface ou clique para selecionar
              </p>
            </div>
            
            {/* Arrow 1 */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-gray-300" />
            </div>
            
            {/* Step 2 */}
            <div className="text-center relative">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-sm">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Processamento IA</h3>
              <p className="text-gray-600">
                Nossa IA avançada processa seu áudio localmente, garantindo velocidade e privacidade
              </p>
            </div>
            
            {/* Arrow 2 */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-gray-300" />
            </div>
            
            {/* Step 3 */}
            <div className="text-center relative">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Download className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Baixe o resultado</h3>
              <p className="text-gray-600">
                Sua transcrição está pronta! Copie, edite ou exporte no formato que preferir
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg">
              Experimentar Agora
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              O que nossos usuários dizem
            </h2>
            <div className="flex justify-center items-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
              <span className="text-gray-600 ml-2">4.9/5 baseado em 2.847 avaliações</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Incrível! Consegui transcrever uma entrevista de 3 horas em menos de 10 minutos. 
                A precisão é impressionante."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">MS</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Maria Silva</p>
                  <p className="text-gray-600 text-sm">Jornalista</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Uso para transcrever aulas e reuniões. Interface super simples e resultados perfeitos. 
                Recomendo muito!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">CR</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Carlos Rodrigues</p>
                  <p className="text-gray-600 text-sm">Estudante</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Ferramenta essencial no meu trabalho. Economizo horas toda semana. 
                E o melhor: é totalmente gratuito!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">AL</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Ana Lima</p>
                  <p className="text-gray-600 text-sm">Advogada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para transformar seus áudios em texto?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Junte-se a milhares de usuários que já descobriram a facilidade do TranscribeAI
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg">
              <Download className="w-5 h-5 inline mr-2" />
              Download Gratuito
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
              Ver Demonstração
            </button>
          </div>
          
          <div className="flex justify-center items-center mt-8 space-x-8">
            <div className="flex items-center text-blue-100">
              <Users className="w-5 h-5 mr-2" />
              <span>50.000+ usuários</span>
            </div>
            <div className="flex items-center text-blue-100">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>100% gratuito</span>
            </div>
            <div className="flex items-center text-blue-100">
              <Shield className="w-5 h-5 mr-2" />
              <span>Privacidade garantida</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Mic className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">TranscribeAI</span>
              </div>
              <p className="text-gray-400 mb-6">
                A forma mais fácil de transcrever seus áudios com qualidade profissional.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Produto</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Download</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Atualizações</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Roadmap</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Suporte</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tutoriais</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Empresa</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacidade</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Termos</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 TranscribeAI. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;