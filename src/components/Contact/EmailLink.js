import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// Validates the first half of an email address.
const validateText = (text) => {
  // NOTE: Passes RFC 5322 but not tested on google's standard.
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
  return re.test(text) || text.length === 0;
};

const messages = [
  'hi',
  '你好',
  'hola',
  'こんにちは',
  '안녕하세요',
  'Thanks for visiting my personal website!',
  'you-can-email-me-at hfwang@email.unc.edu!',
];

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
    return () => {}; // pass linter
  }, [delay]);
};

const EmailLink = ({ loopMessage }) => {
  const delay = 2000; // time in milliseconds to wait before showing the next message
  const [idx, setIdx] = useState(0); // points to current message
  const [isActive, setIsActive] = useState(true); // disable when all messages are printed

  useInterval(
    () => {
      if (idx < messages.length - 1) {
        setIdx(idx + 1);
      } else if (loopMessage) {
        setIdx(0);
      } else {
        setIsActive(false);
      }
    },
    isActive ? delay : null,
  );

  return (
    <div
      className="inline-container"
      style={validateText(messages[idx]) ? {} : { color: 'red' }}
      onMouseEnter={() => setIsActive(false)}
      onMouseLeave={() => idx < messages.length && setIsActive(true)}
    >
      <a href="mailto:hfwang@email.unc.edu">
        <span>{messages[idx]}</span>
      </a>
    </div>
  );
};

EmailLink.defaultProps = {
  loopMessage: false,
};

EmailLink.propTypes = {
  loopMessage: PropTypes.bool,
};

export default EmailLink;
