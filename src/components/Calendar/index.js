import React, {useEffect, useState} from 'react'
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


export default function Index(props) {
    
    const [selectedYear, setSelectedYear] = useState(0)
    const [selectedMonth, setSelectedMonth] = useState(0)
    const [selectedDay, setSelectedDay] = useState(0)
    const [listDays, setListDays] = useState([])
    const [fistDays, setFistDays] = useState([])
    const [nextDays, setNextDays] = useState([])
    const [today, setToday] = useState([])
    
    const selectDayFormat = selectedDay < 10 ? 
    `0${selectedDay}` : selectedDay

   const selectMontFormt = selectedMonth < 10 ? 
        `0${selectedMonth}` : selectedMonth
    //assim que abrir o calendario

    useEffect(() => {
        let today = new Date();
        setSelectedYear(today.getFullYear() )
        setSelectedMonth(today.getMonth())
        setSelectedDay(today.getDate())


    }, [])

    useEffect(() => {
        let daysInMonth = new Date(selectedYear, selectedMonth+1, 0).getDate() 
        let newListDay = []
         
        //proximos dias 
        const date = new Date()
        const lastDayIndex = new Date(date.getFullYear(),
            date.getMonth() + 1, 0
        ).getDay()

        const nextDays = 7 - lastDayIndex - 1
        const arrayNextDays = []
        //dias anteriores
        let prevLastDay = new Date(selectedYear,
            selectedMonth, 0
        ).getDate()
        let firstDayMonthBack =  new Date(selectedYear,
            selectedMonth, 1
        )
        let firstDayIndex = firstDayMonthBack.getDay()
        let arrayDay = []

        for(let x = firstDayIndex; x > 0; x--){
            let test =  prevLastDay - x + 1
            arrayDay.push(test)
        }

        for(let i=1; i<=daysInMonth; i++){
            let d = new Date(selectedYear, selectedMonth, i)
            let month = d.getMonth() - 1
            let day = d.getDate()       
            month = month < 10 ? `0${month}` : month
            day = day < 10 ? `0${day}` : day
            newListDay.push({ 
                number: i
            })     
        }

        for(let j=1; j <= nextDays; j++){
            arrayNextDays.push(j)
        }

        let today = new Date()
        setToday(today.getDate())

        setNextDays(arrayNextDays)
        setFistDays(arrayDay)
        setListDays(newListDay)


    }, [selectedMonth, selectedYear])

  const handleLeftDateClick = () => {
    let mountDate = new Date(selectedYear, selectedMonth, selectedDay)
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

  const handleCancClick = () => {
    const container = document.getElementById("container")
    container.style.display = "none"
  }

  const handleRightDateClick = () => {
    let mountDate = new Date(selectedYear, selectedMonth, selectedDay) 
    mountDate.setMonth( mountDate.getMonth() + 1 )
    setSelectedYear(mountDate.getFullYear())
    setSelectedMonth(mountDate.getMonth())
    setSelectedDay(mountDate.getDate())
    }

  const handleInputCalender = () => {
    const container = document.getElementById("container")
    container.style.display = "flex"
  }

  const formt = Number(selectMontFormt) + 1
  const formaMonth = formt < 10 ? 
      `0${formt}` : formt

    return (
        <ContainerCalenderMain>
          
          <h6>Em qual data foi realizado?</h6>

          <div className="input_label">
            <InputCalender
                value={`${selectDayFormat}/${formaMonth}/${selectedYear}`}  
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
                      fistDays.map((item, key) => (
                        <DateItem key={key}>
                         <DateItemNumber></DateItemNumber>
                        </DateItem>
                      ))
                  }

                  {
                      listDays.map((item, key) => (
                          <>
                          {
                              
                             <> 
                            <DateItem
                              key={key}
                              onClick={item.number === today - 1 || item.number === today - 2 || item.number === today ? () => setSelectedDay(item.number)
                                    : () => {}
                                }
                              
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

                                className={item.number === today - 1 || item.number === today - 2 || item.number === today  ? "twoLastDays" : ""}
                              >{item.number}</DateItemNumber>
                          </DateItem>
                                        
                                </>
                          }
                          
                          </>
                      ))
                  }
              </ContainerDaysMonth>

              <ContainerBtn>
                  <button className="cancelar"
                    onClick={handleCancClick}
                  >CANCELAR</button>
                  <button
                      className="escolher" 
                      onClick={handleFinishClick}
                  >ESCOLHER</button>
              </ContainerBtn>

          </Container>
        </ContainerCalenderMain>
    )
}
