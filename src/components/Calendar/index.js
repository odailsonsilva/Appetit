import React, {useEffect, useState, setShow} from 'react'
import BtnNextImg from '../../assets/imgs/BtnNext.svg'
import BtnBackImg from '../../assets/imgs/BtnBack.svg'
import {
    Container, 
    HeaderCalender, 
    ContainerArrows,
    BtnNext,
    BtnBack,
    ContainerDaysMonth,
    DateItem,
    DateItemWeekDay,
    DateItemNumber,
    ContainerBtn,
    InputCalender,
    ContainerCalenderMain
} from'./styles.js'


const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outrubro',
    'Novembro',
    'Dezembro'
]

const days = [
    'Dom',
    'Seg',
    'Ter',
    'Qua',
    'Qui',
    'Sex',
    'Sab'
]

const daySo = []

export default function Index(props) {
    
    const [selectedYear, setSelectedYear] = useState(0)
    const [selectedMonth, setSelectedMonth] = useState(0)
    const [selectedDay, setSelectedDay] = useState(0)
    const [listDays, setListDays] = useState([])
    
    const selectDayFormat = selectedDay < 10 ? 
    `0${selectedDay}` : selectedDay
    const selectMontFormt = selectedMonth < 10 ? 
        `0${selectedMonth}` : selectedMonth
    //assim que abrir o calendario
    useEffect(() => {
        let today = new Date();
        setSelectedYear(today.getFullYear())
        setSelectedMonth(today.getMonth() )
        setSelectedDay(today.getDate())

        
    }, [])

    useEffect(() => {
        let daysInMonth = new Date(selectedYear, selectedMonth+1, 0).getDate() //captura o ultimo dia do mes 
        let newListDay = []
        

        for(let i=1; i<=daysInMonth; i++){
            let d = new Date(selectedYear, selectedMonth, i)
            let year = d.getFullYear()
            let month = d.getMonth() + 1
            let day = d.getDate()

            
            month = month < 10 ? `0${month}` : month
            day = day < 10 ? `0${day}` : day

            let selDate = `${year}-${month}-${day}`//monta uma data

            newListDay.push({ //weekday e o dia (seg, ter...)
                number: i
            })
            
        }

        setListDays(newListDay)

    }, [selectedMonth, selectedYear])//sempre que eles modificarem pega os dias do mes

  const handleLeftDateClick = () => {
    let mountDate = new Date(selectedYear, selectedMonth, selectedDay)// montou uma data
        mountDate.setMonth( mountDate.getMonth() - 1 )
        setSelectedYear(mountDate.getFullYear())
        setSelectedMonth(mountDate.getMonth())
        setSelectedDay(mountDate.getDate())
    }

  const handleFinishClick = () => {
      if(selectedYear > 0 && selectedDay > 0 && selectedDay > 0){
        const container = document.getElementById("container")
        container.style.display = "none" 
        props.handleDate(1)
      }
  }

  const handleRightDateClick = () => {
    let mountDate = new Date(selectedYear, selectedMonth, selectedDay) // montou uma data
    mountDate.setMonth( mountDate.getMonth() + 1 )
    setSelectedYear(mountDate.getFullYear())
    setSelectedMonth(mountDate.getMonth())
    setSelectedDay(mountDate.getDate())
    }

  const handleInputCalender = () => {
    const container = document.getElementById("container")
    container.style.display = "flex"
  }


    return (
        <ContainerCalenderMain>
          
          <h6>Em qual data foi realizado?</h6>

          <div className="input_label">
            <InputCalender
                value={`${selectDayFormat}/${selectMontFormt}/${selectedYear}`}  
                onClick={handleInputCalender}
                
            />

            <label>Data do pedido</label>
          </div>
          <Container id="container">
              <HeaderCalender>
                  <h6>{selectedYear}</h6>
                  <h3>{`${selectedDay} de ${months[selectedMonth]}`}</h3>
              </HeaderCalender>

              <ContainerArrows>
                  <BtnBack src={BtnBackImg} onClick={handleLeftDateClick} />
                  <div>{months[selectedMonth]}</div>
                  <BtnNext src={BtnNextImg} onClick={handleRightDateClick} />
              </ContainerArrows>

              <ContainerDaysMonth>
        
                  {
                      days.map((item, key) => (
                          <DateItemWeekDay key={key}>{item}</DateItemWeekDay>
                      ))
                  }

                  {
                      listDays.map((item, key) => (
                          <>
                          <DateItem
                              key={key}
                              onClick={() => setSelectedDay(item.number) }
                              
                              style={{
                                  backgroundColor: item.number === selectedDay ?
                                  '#ff8822' : "#fff"
                              }}
                              >
                              <DateItemNumber
                                  style={{
                                  color: item.number === selectedDay ?
                                  '#fff' : null 
                              }}
                              >{item.number}</DateItemNumber>
                          </DateItem>
                          </>
                      ))
                  }
              </ContainerDaysMonth>

              <ContainerBtn>
                  <button className="cancelar">CANCELAR</button>
                  <button
                      className="escolher" 
                      onClick={handleFinishClick}
                  >ESCOLHER</button>
              </ContainerBtn>

          </Container>
        </ContainerCalenderMain>
    )
}
