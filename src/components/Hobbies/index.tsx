import React from 'react';
import { GiConsoleController, GiBattleGear } from 'react-icons/gi';
import { MdLibraryMusic, MdLocalCafe } from 'react-icons/md';
import { Row, Col } from 'antd';
import './index.css';

// TODO: 趣味の型定義を汎用的にする
type Hobby = {
  mk8d: {
    title: {
      jp: string;
      en: string;
    },
    description: {
      jp: string;
      en: string;
    }
  },
  pokemon: {
    title: {
      jp: string;
      en: string
    },
    description: {
      jp: string;
      en: string;
    }
  },
  eurobeat: {
    title: {
      jp: string;
      en: string;
    },
    description: {
      jp: string;
      en: string;
    }
  },
  coffee: {
    title: {
      jp: string;
      en: string;
    },
    description: {
      jp: string;
      en: string;
    }
  }
};

type Props = {
  hobbies: Hobby;
  language: string;
};

function Hobbies(props: Props) {

  const { hobbies, language } = props;

  return (
    <div className="hobbies">
      <Row>
        <Col className="hobby" xs={24} sm={12} md={12} lg={12} >
          <div className="hobby-icon"><GiConsoleController size="8em" /></div>
          <div className="hobby-title"><p>{language === "jp" ? hobbies.mk8d.title.jp : hobbies.mk8d.title.en}</p></div>
          <div className="hobby-description">
            <p>{language === "jp" ? hobbies.mk8d.description.jp : hobbies.mk8d.description.en}</p>
          </div>
        </Col>
        <Col className="hobby" xs={24} sm={12} md={12} lg={12} >
          <div className="hobby-icon"><GiBattleGear size="8em" /></div>
          <div className="hobby-title"><p>{language === "jp" ? hobbies.pokemon.title.jp : hobbies.pokemon.title.en}</p></div>
          <div className="hobby-description">
            <p>{language === "jp" ? hobbies.pokemon.description.jp : hobbies.pokemon.description.en}</p>
          </div>
        </Col>
        <Col className="hobby" xs={24} sm={12} md={12} lg={12} >
          <div className="hobby-icon"><MdLibraryMusic size="8em" /></div>
          <div className="hobby-title"><p>{language === "jp" ? hobbies.eurobeat.title.jp : hobbies.eurobeat.title.en}</p></div>
          <div className="hobby-description">
            <p>{language === "jp" ? hobbies.eurobeat.description.jp : hobbies.eurobeat.description.en}</p>
          </div>
        </Col>
        <Col className="hobby" xs={24} sm={12} md={12} lg={12} >
          <div className="hobby-icon"><MdLocalCafe size="8em" /></div>
          <div className="hobby-title"><p>{language === "jp" ? hobbies.coffee.title.jp : hobbies.coffee.title.en}</p></div>
          <div className="hobby-description">
            <p>{language === "jp" ? hobbies.coffee.description.jp : hobbies.coffee.description.en}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hobbies;
