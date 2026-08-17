import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

type Question = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

const questions: Question[] = [
  { question: 'O que acontece durante a fissão nuclear?', options: ['Dois núcleos leves se unem', 'Um núcleo pesado se divide em núcleos menores', 'Um átomo perde somente seus elétrons', 'A matéria deixa de liberar energia'], answer: 1, explanation: 'Na fissão, um núcleo atômico pesado se divide em dois ou mais núcleos menores e libera muita energia.' },
  { question: 'Qual processo alimenta o Sol e as outras estrelas?', options: ['Fissão nuclear', 'Decaimento beta', 'Fusão nuclear', 'Emissão alfa'], answer: 2, explanation: 'Na fusão, núcleos leves se unem para formar um núcleo mais pesado, como ocorre no interior das estrelas.' },
  { question: 'Por que a fusão nuclear é difícil de reproduzir na Terra?', options: ['Porque não libera energia', 'Porque exige temperaturas e pressões extremas', 'Porque só acontece com núcleos pesados', 'Porque não ocorre no espaço'], answer: 1, explanation: 'A fusão exige condições extremas de temperatura e pressão para aproximar e unir os núcleos leves.' },
  { question: 'Quem descobriu acidentalmente a radioatividade em 1896?', options: ['Ernest Rutherford', 'Henri Becquerel', 'Lise Meitner', 'Pierre Curie'], answer: 1, explanation: 'Henri Becquerel observou que sais de urânio escureciam chapas fotográficas mesmo sem luz solar.' },
  { question: 'Quais elementos Marie e Pierre Curie ajudaram a isolar?', options: ['Urânio e alumínio', 'Polônio e rádio', 'Césio e chumbo', 'Hélio e hidrogênio'], answer: 1, explanation: 'Os Curie aprofundaram os estudos da radioatividade e isolaram o polônio e o rádio.' },
  { question: 'Qual cientista é conhecido como o “pai da física nuclear”?', options: ['Henri Becquerel', 'Ernest Rutherford', 'Pierre Curie', 'Albert Einstein'], answer: 1, explanation: 'Rutherford descobriu o núcleo atômico, formulou seu modelo atômico e estudou as radiações alfa e beta.' },
  { question: 'Qual cientista teve papel fundamental na descoberta da fissão nuclear?', options: ['Lise Meitner', 'Marie Curie', 'Henri Becquerel', 'Niels Bohr'], answer: 0, explanation: 'Lise Meitner foi uma física austríaca que contribuiu decisivamente para a compreensão da fissão nuclear.' },
  { question: 'Qual tipo de radiação possui baixo poder de penetração e pode ser bloqueado por papel?', options: ['Radiação alfa', 'Radiação beta', 'Radiação gama', 'Raios X'], answer: 0, explanation: 'A radiação alfa é formada por partículas pesadas, tem carga positiva e baixo poder de penetração.' },
  { question: 'Qual material é citado como proteção contra a radiação gama?', options: ['Papel', 'Alumínio fino', 'Chumbo', 'Tecido de algodão'], answer: 2, explanation: 'A radiação gama é muito penetrante; por isso, exige materiais densos, como o chumbo, para atenuá-la.' },
  { question: 'Qual é um exemplo de fonte natural de radiação?', options: ['Tomografia computadorizada', 'Radiação vinda do espaço e do solo', 'Detector de fumaça', 'Radioterapia'], answer: 1, explanation: 'Entre as fontes naturais estão a radiação cósmica, o solo com urânio, os alimentos e o próprio corpo.' },
  { question: 'Qual alternativa apresenta uma aplicação da radiação na medicina?', options: ['PET scan e radioterapia', 'Controle de pragas somente', 'Produção de papel', 'Fabricação de roupas'], answer: 0, explanation: 'A radiação é utilizada em exames, como raio-X e PET scan, e em tratamentos, como a radioterapia.' },
  { question: 'O acidente radiológico de Goiânia, em 1987, envolveu uma cápsula de qual material?', options: ['Urânio-235', 'Césio-137', 'Rádio-226', 'Hidrogênio-2'], answer: 1, explanation: 'O acidente de Goiânia envolveu uma cápsula de Césio-137 e exigiu ações de contenção, descontaminação e acompanhamento.' },
];

export default function QuizScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const question = questions[currentQuestion];
  const progress = useMemo(() => ((currentQuestion + (selectedAnswer !== null ? 1 : 0)) / questions.length) * 100, [currentQuestion, selectedAnswer]);

  const chooseAnswer = (optionIndex: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(optionIndex);
    if (optionIndex === question.answer) setScore((value) => value + 1);
  };

  const nextQuestion = () => {
    if (selectedAnswer === null) return;
    if (currentQuestion === questions.length - 1) { setFinished(true); return; }
    setCurrentQuestion((value) => value + 1);
    setSelectedAnswer(null);
  };

  const restartQuiz = () => { setCurrentQuestion(0); setSelectedAnswer(null); setScore(0); setFinished(false); };

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    const message = percentage >= 80 ? 'Excelente domínio do conteúdo!' : percentage >= 60 ? 'Bom resultado! Revise alguns tópicos para avançar ainda mais.' : 'Continue estudando: cada revisão ajuda a compreender melhor a radioatividade.';
    return (
      <ScrollView contentContainerStyle={styles.resultContainer} style={styles.container}>
        <Animated.View entering={FadeInDown.duration(500)} style={styles.resultCard}>
          <Text style={styles.title}>Quiz concluído!</Text>
          <Text style={styles.score}>{score}/{questions.length}</Text>
          <Text style={styles.percentage}>{percentage}% de acertos</Text>
          <Text style={styles.resultMessage}>{message}</Text>
          <Pressable onPress={restartQuiz} style={styles.primaryButton}><Text style={styles.primaryButtonText}>Tentar novamente</Text></Pressable>
        </Animated.View>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Animated.Text entering={FadeInDown.duration(500)} style={styles.title}>Quiz: Mundo da Radioatividade</Animated.Text>
      <Text style={styles.subtitle}>Teste seus conhecimentos sobre energia nuclear e radioatividade.</Text>
      <View style={styles.progressTrack}><View style={[styles.progressFill, { width: `${progress}%` }]} /></View>
      <Text style={styles.progressLabel}>Questão {currentQuestion + 1} de {questions.length}</Text>

      <Animated.View entering={FadeInDown.delay(150).duration(500)} style={styles.questionCard}>
        <Text style={styles.question}>{question.question}</Text>
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = selectedAnswer !== null && index === question.answer;
          const isWrong = isSelected && selectedAnswer !== question.answer;
          return (
            <Pressable key={option} onPress={() => chooseAnswer(index)} style={[styles.option, isCorrect && styles.correctOption, isWrong && styles.wrongOption, isSelected && !isCorrect && !isWrong && styles.selectedOption]}>
              <Text style={[styles.optionLetter, (isCorrect || isWrong) && styles.feedbackText]}>{String.fromCharCode(65 + index)}</Text>
              <Text style={[styles.optionText, (isCorrect || isWrong) && styles.feedbackText]}>{option}</Text>
            </Pressable>
          );
        })}
        {selectedAnswer !== null && <View style={styles.explanationBox}><Text style={styles.explanationTitle}>{selectedAnswer === question.answer ? 'Resposta correta!' : 'Resposta incorreta'}</Text><Text style={styles.explanation}>{question.explanation}</Text></View>}
        <Pressable onPress={nextQuestion} disabled={selectedAnswer === null} style={[styles.primaryButton, selectedAnswer === null && styles.disabledButton]}><Text style={styles.primaryButtonText}>{currentQuestion === questions.length - 1 ? 'Ver resultado' : 'Próxima questão'}</Text></Pressable>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617' },
  content: { padding: 20, paddingBottom: 40 },
  resultContainer: { flexGrow: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#facc15', textAlign: 'center', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#cbd5e1', lineHeight: 23, textAlign: 'center', marginBottom: 22 },
  progressTrack: { height: 9, backgroundColor: '#1e293b', borderRadius: 10, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: '#eab308', borderRadius: 10 },
  progressLabel: { color: '#94a3b8', textAlign: 'right', marginTop: 8, marginBottom: 15, fontSize: 13 },
  questionCard: { backgroundColor: '#0f172a', padding: 20, borderRadius: 15, borderLeftWidth: 5, borderLeftColor: '#eab308', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 },
  question: { color: '#f8fafc', fontSize: 21, fontWeight: 'bold', lineHeight: 29, marginBottom: 18 },
  option: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1e293b', borderColor: '#334155', borderWidth: 1, borderRadius: 10, padding: 14, marginBottom: 10 },
  selectedOption: { borderColor: '#facc15' },
  correctOption: { backgroundColor: '#14532d', borderColor: '#4ade80' },
  wrongOption: { backgroundColor: '#7f1d1d', borderColor: '#f87171' },
  optionLetter: { color: '#facc15', fontWeight: 'bold', fontSize: 16, width: 28 },
  optionText: { color: '#e2e8f0', fontSize: 16, lineHeight: 22, flex: 1 },
  feedbackText: { color: '#fff' },
  explanationBox: { backgroundColor: '#172554', borderRadius: 10, padding: 14, marginTop: 5, marginBottom: 18 },
  explanationTitle: { color: '#fde68a', fontWeight: 'bold', fontSize: 16, marginBottom: 5 },
  explanation: { color: '#dbeafe', fontSize: 14, lineHeight: 21 },
  primaryButton: { alignItems: 'center', backgroundColor: '#eab308', borderRadius: 10, padding: 15, marginTop: 8 },
  disabledButton: { backgroundColor: '#475569' },
  primaryButtonText: { color: '#111827', fontSize: 16, fontWeight: 'bold' },
  resultCard: { backgroundColor: '#0f172a', padding: 26, borderRadius: 15, borderLeftWidth: 5, borderLeftColor: '#eab308', alignItems: 'center' },
  score: { color: '#facc15', fontSize: 58, fontWeight: 'bold', marginTop: 12 },
  percentage: { color: '#f8fafc', fontSize: 20, fontWeight: 'bold', marginTop: 5 },
  resultMessage: { color: '#cbd5e1', fontSize: 16, lineHeight: 24, textAlign: 'center', marginVertical: 22 },
});
