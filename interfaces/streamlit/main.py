# crete a simple streamlit application
# this app is a demo for omni
# omni is a plugin that allows you to easily import client keys and secrets into your streamlit app


import streamlit as st

st.title("Omni Demo")
st.write("This is a demo for Omni, a plugin that allows you to easily import client keys and secrets into your streamlit app")

import streamlit.components.v1 as components

key=st.text_input("OpenAI API Key", key="openai", placeholder="omni-openai")

button=st.button("Run the code")

if button:
    st.write(key)
