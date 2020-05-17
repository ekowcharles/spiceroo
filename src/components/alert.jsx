import React from 'react';

const Alert = props => {
  const getIconText = type => {
    return type === 'info' ? 'i' : '!';
  };

  const getIconColor = type => {
    if (type === 'info') {
      return '#0C7C59';
    } else if (type === 'error') {
      return '#D64933';
    } else if (type === 'warn') {
      return '#DBD053';
    }
  };

  const getIconClass = type => {
    return 'icon icon-' + type;
  };

  const getOkButtonClass = (okText, cancelText) => {
    if (okText === undefined) {
      return 'gone';
    } else if (cancelText === undefined) {
      return 'accept full';
    } else {
      return 'accept half';
    }
  };

  const getCancelButtonClass = (okText, cancelText) => {
    if (cancelText === undefined) {
      return 'gone';
    } else if (okText === undefined) {
      return 'reject full';
    } else {
      return 'reject half';
    }
  };

  const clicked = action => {
    props.onResponse(action, props.alert.meta);
  };

  const closed = status => {
    return 'roo-alert ' + status;
  };

  const iconColor = getIconColor(props.alert.type);

  return (
    <div className={closed(props.alertStatus)}>
      <div className={getIconClass(props.alert.type)}>
        <svg height="80" width="80">
          <defs>
            <clipPath id="cut-off-bottom">
              <rect x="0" y="0" width="80" height="40" />
            </clipPath>
            <filter id="f1" x="0" y="0">
              <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
            </filter>
          </defs>
          <circle
            cx="40"
            cy="40"
            r="38"
            fill={iconColor}
            opacity="0.3"
            clipPath="url(#cut-off-bottom)"
          />
          <g id="UrTavla">
            <circle cx="40" cy="40" r="25" fill={iconColor} />
            <text
              x="40"
              y="40"
              className="icon-type"
              textAnchor="middle"
              dy="0.3em"
            >
              {getIconText(props.alert.type)}
            </text>
          </g>
        </svg>
      </div>
      <div className="message">{props.alert.message}</div>
      <div className="btn-area">
        <button
          className={getOkButtonClass(
            props.alert.okText,
            props.alert.cancelText
          )}
          onClick={() => clicked('ok')}
        >
          {props.alert.okText}
        </button>
        <button
          className={getCancelButtonClass(
            props.alert.okText,
            props.alert.cancelText
          )}
          onClick={() => clicked('cancel')}
        >
          {props.alert.cancelText}
        </button>
      </div>
    </div>
  );
};

export default Alert;
