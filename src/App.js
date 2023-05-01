import './App.css';
import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { TypeAnimation } from 'react-type-animation';
import FirstView from './views/FirstView';
import SecondView from './views/SecondView';
import ThirdView from './views/ThirdView';
import FourthView from './views/FourthView';
import FifthView from './views/FifthView';
import SixthView from './views/SixthView';
import SeventhView from './views/SeventhView';
import EightView from './views/EightView';
import NinthView from './views/NinthView';
import TenthView from './views/TenthView';
import ElevenView from './views/ElevenView';

const ScrollamaDemo = () => {
  const [functionToShow, setfunctionToShow] = useState(0);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setfunctionToShow(data)
  };

  const getComponent = () => {
    switch (functionToShow) {
      case 0:
        return <FirstView />;
      case 1:
        return <SecondView />;
      case 2:
        return <ThirdView />;
      case 3:
        return <FourthView />;
      case 4:
        return <FifthView />;
      case 5:
        return <SixthView />;
      case 6:
        return <SeventhView />;
      case 7:
        return <EightView />;
      case 8:
        return <NinthView />;
      case 9:
        return <TenthView />;
      case 10:
        return <ElevenView />;
      default:
        return <div></div>;
    }
  };

  const onStepExit = () => {
    setfunctionToShow(null)
  }

  return (
    <div>
      <div style={{
        marginTop: '30vh',
        textAlign: 'center',
        fontSize: '3rem',
        fontFamily: 'inter',
        width: '100vw'
      }}>
        Finance is <span>
          {<TypeAnimation
            sequence={[
              'extractive', // Types 'One'
              2000, // Waits 1s
              'out of control', // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              'dangerous', // Types 'Three' without deleting 'Two',
              2000,

            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}

          />}
        </span>
        <br></br>
        <div style={{ fontSize: '1rem', marginTop: '10px' }}>
          Pitch for The Pudding By Ethan Markwalter
        </div>
      </div>

      <div style={{ top: 0, height: '100vh', width: '100vw', position: 'sticky', marginTop: '100px', display: 'flex', alignItems: 'center' }}>
        {getComponent()}
      </div>

      <div style={{ position: 'sticky', top: 0 }}>
        <Scrollama offset={0.5} onStepEnter={onStepEnter} onStepExit={onStepExit}>
          <Step data={0} onStepEnter={onStepEnter}>
            <div>
              <div style={{
                top: 30,
                margin: 10,
                width: '600px',
                backgroundColor: 'black',
              }}>
                <p style={{
                  fontFamily: 'inter',
                  fontSize: '1.5rem',
                  color: 'white',
                  padding: '10px',
                }}>
                  For something that self implodes so often, why do we let it proceed
                </p>
              </div>
              <div style={{ marginTop: '70vh', display: 'flex', justifyContent: 'right' }}>
                <div style={{
                  width: 'fit-content',
                  marginRight: '30px',
                  fontFamily: 'inter',
                  fontSize: '1.5rem',
                  padding: '5px',
                  color: 'white',
                  backgroundColor: 'black'
                }}>
                  nothing as changed,
                  <br></br>
                  things literally have only gotten crazier
                </div>
              </div>
            </div>
          </Step>
          <Step data={1} onStepEnter={onStepEnter}>
            <div>
              <div style={{
                top: 30,
                margin: 10,
                width: 'fit-content',
                backgroundColor: 'black',
              }}>
                <p style={{
                  fontFamily: 'inter',
                  fontSize: '1.5rem',
                  color: 'white',
                  padding: '10px',
                }}>
                  Finance is a major contributor in
                </p>
              </div>
              <div style={{ marginTop: '70vh', display: 'flex', justifyContent: 'right' }}>
                <div style={{
                  width: 'fit-content',
                  marginRight: '30px',
                  fontFamily: 'inter',
                  fontSize: '1.5rem',
                  padding: '5px',
                  color: 'white',
                  backgroundColor: 'black'
                }}>
                  negative externalities
                </div>
              </div>

            </div>
          </Step>
          <Step data={2} onStepEnter={onStepEnter}>
            <div>
              <div style={{
                top: 30,
                margin: 10,
                width: 'fit-content',
                backgroundColor: 'black',
              }}>
                <p style={{
                  fontFamily: 'inter',
                  fontSize: '1.5rem',
                  color: 'white',
                  padding: '10px',
                }}>
                  Back then finance was a means to an end

                </p>
              </div>
              <div style={{ marginTop: '70vh', display: 'flex', justifyContent: 'right' }}>
                <div style={{
                  width: 'fit-content',
                  marginRight: '30px',
                  fontFamily: 'inter',
                  fontSize: '1.5rem',
                  padding: '5px',
                  color: 'white',
                  backgroundColor: 'black'
                }}>
                  intended to be a faciliator of the economy
                </div>
              </div>
            </div>
          </Step>
          <Step data={3} onStepEnter={onStepEnter}>
            <div>
              <div style={{
                top: 30,
                margin: 10,
                width: 'fit-content',
                backgroundColor: 'black',
              }}>
                <p style={{
                  fontFamily: 'inter',
                  fontSize: '1.5rem',
                  color: 'white',
                  padding: '10px',
                }}>
                  Now it is a means in itself

                </p>
              </div>
              <div style={{ marginTop: '70vh', display: 'flex', justifyContent: 'right' }}>
                <div style={{
                  width: 'fit-content',
                  marginRight: '30px',
                  fontFamily: 'inter',
                  fontSize: '1.5rem',
                  padding: '5px',
                  color: 'white',
                  backgroundColor: 'black'
                }}>
                  a profit-driven economic agent
                </div>
              </div>
            </div>
          </Step>
          <Step data={4} onStepEnter={onStepEnter}>
            <div>
              <div style={{
                top: 30,
                margin: 10,
                width: 'fit-content',
                backgroundColor: 'black',
              }}>
                <p style={{
                  fontFamily: 'inter',
                  fontSize: '1.5rem',
                  color: 'white',
                  padding: '10px',
                }}>
                  Let's look at some data

                </p>
              </div>
              <div style={{ marginTop: '70vh', display: 'flex', justifyContent: 'right' }}>
                <div style={{
                  width: 'fit-content',
                  marginRight: '30px',
                  fontFamily: 'inter',
                  fontSize: '1.5rem',
                  padding: '5px',
                  color: 'white',
                  backgroundColor: 'black'
                }}>
                  less banks, more money
                </div>
              </div>
            </div>
          </Step>
          <Step data={5} onStepEnter={onStepEnter}>
            <div>
              <div style={{
                top: 30,
                margin: 10,
                width: 'fit-content',
                backgroundColor: 'black',
              }}>
                <p style={{
                  fontFamily: 'inter',
                  fontSize: '1.5rem',
                  color: 'white',
                  padding: '10px',
                }}>
                  They think they're gods

                </p>
              </div>
              <div style={{ marginTop: '70vh', display: 'flex', justifyContent: 'right' }}>
                <div style={{
                  width: 'fit-content',
                  marginRight: '30px',
                  fontFamily: 'inter',
                  fontSize: '1.5rem',
                  padding: '5px',
                  color: 'white',
                  backgroundColor: 'black'
                }}>
                  literally building temples for themselves
                </div>
              </div>
            </div>
          </Step>
          <Step data={6} onStepEnter={onStepEnter}>
            <div>
              <div style={{
                top: 30,
                margin: 10,
                width: 'fit-content',
                backgroundColor: 'black',
              }}>
                <p style={{
                  width: '600px',
                  fontFamily: 'inter',
                  fontSize: '1.5rem',
                  color: 'white',
                  padding: '10px',
                }}>
                  The web is so complex, the wall is so thick, they can do and take whatever they want, unquestioned

                </p>
              </div>
              <div style={{ marginTop: '70vh', display: 'flex', justifyContent: 'right' }}>
                <div style={{
                  width: 'fit-content',
                  marginRight: '30px',
                  fontFamily: 'inter',
                  fontSize: '1.5rem',
                  padding: '5px',
                  color: 'white',
                  backgroundColor: 'black'
                }}>
                  like why tho?
                </div>
              </div>
            </div>
          </Step>
          <Step data={7} onStepEnter={onStepEnter}>
            <div>
              <div style={{
                top: 30,
                margin: 10,
                width: 'fit-content',
                backgroundColor: 'black',
              }}>
                <p style={{
                  width: '600px',
                  fontFamily: 'inter',
                  fontSize: '1.5rem',
                  color: 'white',
                  padding: '10px',
                }}>
                  It's not like the government is gonna do anything

                </p>
              </div>
              <div style={{ marginTop: '70vh', display: 'flex', justifyContent: 'right' }}>
                <div style={{
                  width: '600px',
                  marginRight: '30px',
                  fontFamily: 'inter',
                  fontSize: '1.5rem',
                  padding: '5px',
                  color: 'white',
                  backgroundColor: 'black'
                }}>
                  finance is deeply entrenched and they'd like to keep it that way
                </div>
              </div>
            </div>
          </Step>
          <Step data={8} onStepEnter={onStepEnter}>
            <div>
              <div style={{
                top: 30,
                margin: 10,
                width: 'fit-content',
                backgroundColor: 'black',
              }}>
                <p style={{
                  width: '600px',
                  fontFamily: 'inter',
                  fontSize: '1.5rem',
                  color: 'white',
                  padding: '10px',
                }}>
                  I got to Wharton, the quintessential school for finance
                </p>
              </div>
              <div style={{ marginTop: '70vh', display: 'flex', justifyContent: 'right' }}>
                <div style={{
                  width: '600px',
                  marginRight: '30px',
                  fontFamily: 'inter',
                  fontSize: '1.5rem',
                  padding: '5px',
                  color: 'white',
                  backgroundColor: 'black'
                }}>
                  55% of us go into financial services after graduating
                </div>
              </div>
            </div>
          </Step>
          <Step data={9} onStepEnter={onStepEnter}>
            <div>
              <div style={{
                top: 30,
                margin: 10,
                width: 'fit-content',
                backgroundColor: 'black',
              }}>
                <p style={{
                  width: 'fit-content',
                  fontFamily: 'inter',
                  fontSize: '1.5rem',
                  color: 'white',
                  padding: '10px',
                }}>
                  It's not just us either
                </p>
              </div>
              <div style={{ marginTop: '70vh', display: 'flex', justifyContent: 'right' }}>
                <div style={{
                  width: '600px',
                  marginRight: '30px',
                  fontFamily: 'inter',
                  fontSize: '1.5rem',
                  padding: '5px',
                  color: 'white',
                  backgroundColor: 'black'
                }}>
                  Finance is capturing talent from across the globe
                </div>
              </div>
            </div>
          </Step>
          <Step data={10} onStepEnter={onStepEnter} onStepExit={onStepExit}>
            <div>
              <div style={{
                top: 30,
                margin: 10,
                width: 'fit-content',
                backgroundColor: 'black',
              }}>
                <p style={{
                  width: '600px',
                  fontFamily: 'inter',
                  fontSize: '1.5rem',
                  color: 'white',
                  padding: '10px',
                }}>
                  I support making finance smaller, simpler, and more transparent
                </p>
              </div>
              <div style={{ marginTop: '70vh', display: 'flex', justifyContent: 'right' }}>
                <div style={{
                  width: '600px',
                  marginRight: '30px',
                  fontFamily: 'inter',
                  fontSize: '1.5rem',
                  padding: '5px',
                  color: 'white',
                  backgroundColor: 'black'
                }}>
                  the dream is a system that works for the bottom rather the top
                </div>
              </div>
            </div>
          </Step>
        </Scrollama>
        <div style={{ marginTop: '30vh', width: '100vw', textAlign: 'center', fontFamily: 'inter', fontSize: '1.5rem', display: 'flex', flexDirection: 'column' }}>
          I want to do something
          <br></br>
          <ul style={{ fontSize: '1rem', width: '600px', margin: 'auto', marginTop: '30px' }}>
            <li>lean on existing formal critques of financialization and neoliberalism</li>
            <li>embrace the practicality and persuasive power of data</li>
            <li>wrapped in the approachability and drama of visual essays</li>
          </ul>
        </div>
        <div style={{ width: '100vw', marginTop: '10vh', display: 'flex', justifyContent: 'center', fontFamily: 'inter' }}>
          <div style={{ width: '85vw', display: 'flex', flexWrap: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '400px', textAlign: 'center', padding: '5px', border: 'solid 2px green', display: 'flex', alignItems: 'center' }}>
              Hook people on bank skepticism,
              reveal complexity and related sketchiness?
              <br></br>
              Explore how bank balance sheets have changed over time
              <br></br>
              How It's Made style, Papa's Pizzeria
            </div>
            <div style={{ width: '400px', textAlign: 'center', padding: '5px' }}>
              An interactive timeline of how we got here,
              comparing financial mechanisms along the way
            </div>
            <div style={{ width: '400px', textAlign: 'center', padding: '5px' }}>
              Hypocrisy of our capitalistic economy (and entity built upon competition) in contrast to the reality of no competition
              <br></br>
              Monopolies, Conglomerates, Portfolios
            </div>
          </div>
        </div>
        <div style={{ width: '100vw', marginTop: '10vh', marginBottom: '30vh', display: 'flex', justifyContent: 'center', fontFamily: 'inter' }}>
          <div style={{ width: '85vw', display: 'flex', flexWrap: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '400px', textAlign: 'center', padding: '5px' }}>
              Exploration of wages across American and if they reflect true value contributed to the economy
            </div>
            <div style={{ width: '400px', textAlign: 'center', padding: '5px' }}>
              Finance's political influence and the pervasiveness of insider trading
            </div>
            <div style={{ width: '400px', textAlign: 'center', padding: '5px' }}>
              Billionare simulator to show how hard it is to spend your money, but how easy it is to make more of it
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


function App() {

  return (
    <div>
      <ScrollamaDemo />
    </div>
  );
}

export default App;
