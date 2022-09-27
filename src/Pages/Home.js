import React, {useState, useEffect} from "react";

import {View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

export default function Home(){

    let[listaFilmes, setLista] = useState([
        {
            'id': 1,
            'nome': 'Baby Driver',
            'lancamento': '2017',
            'duracao': '1h 55m',
            'sinopse': 'O talentoso motorista de fuga Baby confia nas batidas de sua própria trilha sonora para ser o melhor que existe. A música silencia um zumbido que o perturba desde um acidente na infância'
        },

        {
            'id': 2,
            'nome': 'La La Land',
            'lancamento': '2016',
            'duracao': '2h 8m',
            'sinopse': 'O pianista Sebastian conhece a atriz Mia, e os dois se apaixonam perdidamente. Em busca de oportunidades para suas carreiras na competitiva Los Angeles, os jovens tentam fazer o relacionamento amoroso dar certo, enquanto perseguem fama e sucesso.'
        },

        {
            'id': 3,
            'nome': 'Como Treinar o Seu Dragão',
            'lancamento': '2010',
            'duracao': '1h 38m',
            'sinopse': 'Soluço é um adolescente viking da ilha de Berk, onde lutar contra dragões é um meio de vida. Suas opiniões avançadas e um senso de humor estranho o tornam um desajustado, apesar de seu pai ser o chefe do clã.'
        },

    ])


    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Meus Filmes</Text>
            <Text style={styles.subtitulo}>Olá Marcos, Boa noite!</Text>

            <TextInput style={styles.campo} placeholder="Nome do filme"/>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>

        <View style={styles.box_filmes}>
        <FlatList
                data={listaFilmes}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity style={styles.buttonFilme}>
                        <Text style={styles.textFilme}>{item.nome}</Text>
                        <Text style={styles.textFilme}>{item.lancamento}</Text>
                        <Text style={styles.textFilme}>{item.duracao}</Text>
                        <Text style={styles.textFilme}>{item.sinopse}</Text>
                    </TouchableOpacity>
                )}
            />

        </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#30478C',
        paddingVertical: 70,
        paddingHorizontal: 20
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#FFD700'
    },

    subtitulo:{
        color: '#FFF',
        fontSize: 15
    },

    campo: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        marginTop: 30,
        borderRadius: 7,
        padding: 15
    },

    greetings: {
        color: '#FFF'
    },

    button: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },
    
    buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeitght: 'bold'
    },

    buttonFilme: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 15
    },

    textFilme: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
    }
});