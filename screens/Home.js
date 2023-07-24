import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// components
import MainContainer from '../components/containers/MainConatiner';
import StyledText from '../components/Texts/StyledText';
import NewsSection from '../components/News/NewsSection';

//data
import { newsData } from '../config/data';
export default function Home() {
  return (
    <MainContainer>
        <StyledText style={styles.sectionTitle} big>
             Trending  News
        </StyledText>
        <NewsSection data={newsData}/>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    marginTop:25,
    marginLeft:25
  },
});
