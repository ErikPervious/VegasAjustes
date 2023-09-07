import { getImagemTransporte } from '../utils/getImagemTransporte';
import { transporteImages } from '../utils/globalConts';

export function TransporteCard({ transporte }) {
  const { nome_tpt, descricao_tpt, tarifa_tpt } = transporte;
  const imagemTransporte = getImagemTransporte(nome_tpt);

  return (
    <View style={styles.transporteCard}>
      <View style={styles.transporteHeader}>
        <Text style={styles.transporteName}>{nome_tpt}</Text>
      </View>
      <View style={styles.carouselContainer}>
        {imagemTransporte && <Image source={imagemTransporte} style={styles.image} />}
      </View>

      <Text style={styles.transporteDescription}>{descricao_tpt}</Text>

      {/* Título "Tarifa" abaixo do campo "descricao_tpt" */}
      <Text style={styles.transporteTarifaTitle}>Tarifas:</Text>
      <Text style={styles.transporteTarifa}>{tarifa_tpt}</Text>
    </View>
  );
};