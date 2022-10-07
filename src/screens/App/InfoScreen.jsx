import { View, Text, Alert, ScrollView } from 'react-native'
import React from 'react'
import { Avatar, Card, Title, Paragraph, IconButton, Button, Divider } from 'react-native-paper';
import { FontAwesome } from "@expo/vector-icons"
import { Header } from '../../components/header';

const LeftContent = props => <Avatar.Icon {...props} icon={'account'} />

const InfoScreen = (navigation) => {
    return (
        <ScrollView>
            <Header
            options={{
                title: 'Acerca de nosotros',
                notification: true,
                profile: true
            }}
            />
            <Card>
                <Card.Title title="Acerca de MUF" subtitle="¿Quienes somos?" left={LeftContent} />
                <Card.Content>
                    <Card.Cover
                        style={{
                            backgroundColor: 'whiter'
                        }}
                        source={require('./../../../assets/muf.png')} />
                    <Title style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginTop: 40

                    }}>¿Qué es el MUF?</Title>
                    <Paragraph style={{
                        fontWeight: '400',
                        textAlign: 'justify',
                        textDecorationStyle: 'double',
                        marginTop: 10,
                    }}>
                        El Mapeo de Usos y Fortalezas (MUF) es una herramienta que nos
                        permite recoger y devolver información en las comunidades de
                        manera que nos permita conocer las fortalezas, capacidades, uso de
                        los recursos naturales y visión de futuro de las comunidades
                        aledañas a Área Protegida Cordillera Azul, promoviendo la reflexión
                        y el compromiso para nuestro futuro. {'\n'}El MUF sirve para:{'\n'}
                        • Generar lazos de confianza entre los diferentes actores que
                        participan en la conservación del ANP Cordillera Azul {'\n'}
                        • Sirve para conocer las percepciones de las poblaciones y
                        ofrecer espacios de monitoreo de la calidad de vida de las
                        poblaciones{'\n'}
                        • Ofrecer espacios de reflexión y análisis de la información y
                        resultados del MUF para el desarrollo de las poblaciones.
                        
                    </Paragraph>
                    <Divider />


                    <Button
                        style={{
                            marginTop: 20
                        }}
                        icon={"email"}
                        mode='contained-tonal'
                        onPress={() => {

                        }}
                    >
                        <Text>Enviar correo Electrónico</Text>
                    </Button>
                    <Button
                        style={{
                            marginTop: 20,
                            
                        }}
                        icon={"github"}
                        mode='contained'
                        buttonColor='#000'
                        onPress={() => {

                        }}
                    >
                        <Text>Contacto programador (@zannetdev)</Text>
                    </Button>
                </Card.Content>
            </Card>
        </ScrollView>
    )
}

export default InfoScreen