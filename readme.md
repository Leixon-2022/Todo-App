# ReadME
### Kommandon i kod (VSCODE)
alt + pilar (upp | ner ) för att flytta rad ni står på upp | ner

### Dagens uppgifter & morgondagens
## 2022-12-19 & 2022-12-20

#### Header med en Logo-typ som ska förbättras
  1. Rita en design i Figma med en ikon (rita eller importera)
  2. Snygga till text 
  3. Implementera i HTML & CSS

  ![](assets/header-icon-text.jpg)

  _Exempel_
  
  ![image](https://user-images.githubusercontent.com/47057279/208440689-95caf061-f174-43a1-9e9d-3dce3256ebdf.png)

- **Kort / TodoItem**
  1. Rita en design i Figma
  2. Implementera i CSS (denna har vi skapat dynamiskt via JS)

  ![](assets/todo-item.jpg)

  _Exempel_
  
  ![image](https://user-images.githubusercontent.com/47057279/208440802-608c969a-258c-4b13-b9d7-a612e17466e7.png)


#### Add Item knapp & Formulär**

  Vi har redan 'Title' & 'Text' som vi hämtar från våra input.
  ![](assets/form.jpg)
  - Lägg till så man kan skicka med colorIndex(1-3), alltså <input type="number"> för färg
  (Tänk på att funktionen i vår JavaScript också måste ändras)
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number

  _Exempel_

  ![image](https://user-images.githubusercontent.com/47057279/208442272-854d868d-b539-44f5-a4b7-3a0a3f0f996c.png)


  Extra:
  Använda input "color-picker"
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color
  
  _Exempel_

  ![image](https://user-images.githubusercontent.com/47057279/208442747-da4a0907-45c2-4f4f-a318-2d977c5c5d83.png)


#### Ta bort vår knapp för **Log AppData**, (funktionen kan ligga kvar)

  ![](assets/log-appdata-btn.jpg)

#### Hämta in ett snyggare typsnitt, alltså en **Font** (valfri)

<hr style="border:0.5px solid gray"/>

#### Justera färger, eventuellt lägga in lite egna i :root (alltså egna variabler). 
  - Variablernas värde, går att skriva som 0.5rem etc.
    ![](assets/root-variables-css.jpg)
#### Behöver ni styra fler variabler som standard i er CSS? (Analysera vad som återanvänds)



#### **Extra för de som hinner:**
- AddItem-formulär kan flyttas till en ny sida, alltså man navigerar till en ny HTML-sida där
förmulär återfinns. 
    Efter skickat AddItem ska man åka tillbaka till huvudsidan och se sitt nyligen tillagda TodoItem i listan
    
<hr style="border:0.5px solid gray"/>

- Snygga till koden, extrahera funktionalitet till separata funktioner

  _Exempel_
  
  ![image](https://user-images.githubusercontent.com/47057279/208446854-d168df8a-8f02-4bd2-82e8-c87af1f317f6.png)

  ![image](https://user-images.githubusercontent.com/47057279/208445811-8ed9507e-c2d4-4907-b571-03dca8f49a73.png)

<hr style="border:0.5px solid gray"/>

- Lägg över våra elements i vårt App.elements-objekt, referera på alla ställen

  _Exempel_
  
  ![image](https://user-images.githubusercontent.com/47057279/208447368-4ac725cd-9068-4d87-ade4-da7f29c2ac68.png)
  
  ![image](https://user-images.githubusercontent.com/47057279/208446656-7cd44431-d9c0-403c-a2dc-7e46b2661f5e.png)

  ![image](https://user-images.githubusercontent.com/47057279/208449527-034f0f08-af27-4a0e-9dd6-ddfe66ce8137.png)

