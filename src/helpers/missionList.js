
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MissionItem from '../components/MissionItem';
import id1 from "../assets/id1.png";
import id2 from "../assets/id2.png";
import id3 from "../assets/id3.png";


const MissionList = () => {
const [selectedMission, setSelectedMission] = useState(null);
const missions = [
  {
    id: 1,
    title: 'Sizi Dinliyor, Yanınızda Kalıyoruz',
    description: 'Müşteri memnuniyetini en üst düzeyde tutmayı hedefliyoruz. İhtiyacınızı dikkatle analiz ederek, her aşamada yanınızda yer alıyoruz. İlk görüşmeden itibaren, teknenizin ihtiyaçlarını anlamak için dinliyor ve sizinle sürekli iletişim halinde kalıyoruz. Sorularınıza hızlı yanıtlar veriyor, süreçle ilgili her aşamada sizi bilgilendiriyoruz. Bu sayede, güvenilir bir iş ortaklığı kurarak, sizin için en uygun çözümleri sunmayı amaçlıyoruz.',
    image: id1,
  },
  {
    id: 2,
    title: 'Yerinde Analiz, Etkili Uygulama',
    description: 'Teknenizin ihtiyaçlarını doğru bir şekilde belirlemek için yerinde analiz yapıyoruz. Uzman ekibimiz, teknenizin tüm bileşenlerini detaylı bir şekilde inceler ve ihtiyaçlarınıza özel bir çözüm planı oluşturur. Bu plan, bakım-onarım işlemlerinden yedek parça teminine kadar geniş bir yelpazeyi kapsar. Analiz sonrası, belirlenen çözümleri hızlı ve etkili bir şekilde uygulamaya geçiriyoruz. Böylece, teknenizin performansını artırmak ve olası sorunları önlemek için gerekli adımları atıyoruz.',
    image: id2,
  },
  {
    id: 3,
    title: 'Profesyonel Hizmet, Güvenli Teslimat',
    description: 'Hızlı ve yetkin ekibimizle, tüm işlemleri profesyonel bir şekilde tamamlıyoruz. Her aşamada kaliteyi ön planda tutarak, işimizi titizlikle yürütüyoruz. İşlemler tamamlandıktan sonra, detaylı raporlamalarla yapılan işlemleri sizlere güvenle teslim ediyoruz. Bu raporlar, yapılan bakım ve onarımlar hakkında kapsamlı bilgiler sunarak, teknenizin durumu hakkında sizi bilgilendirir. Amacımız, güvenilir bir hizmet sunarak, deniz yolculuğunuzda huzur içinde olmanızı sağlamaktır.',
    image: id3,
  },
];


  return (
   <Box
  sx={{
    width: '100%',
    maxWidth: 1000,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 3,
    justifyItems: 'center',
  }}
>
      {missions.map((mission, index) => (
        <MissionItem
        key={mission.id}
        title={mission.title}
        description={mission.description}
        image={mission.image}
        isSelected={selectedMission === index}
        onClick={() => setSelectedMission(index)}
/>

      ))}
    </Box>

    
    
  );
};

export default MissionList;

