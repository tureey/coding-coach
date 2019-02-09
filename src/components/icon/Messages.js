import React from 'react';
import Icon from './Icon.js';

export default function Dashboard({ active, ...props }) {
  return (
    <Icon viewBox="0 0 80 80" {...props}>
      <g id="messages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(19.000000, 19.000000)">
          <g>
            <polygon
              fill={active ? '#68544F' : '#898889'}
              points="7.97612537 9.70967742 0.693548387 14.9426471 8.32258065 24.2741935"
            />
            <polygon
              fill={active ? '#53433F' : '#898889'}
              points="35.0238746 9.70967742 34.6774194 24.2741935 42.3064516 14.9426471"
            />
            <path
              d="M35.3709677,1.25308617 L35.3709677,32.0372364 C35.3709677,32.7390482 34.8162131,33.2903226 34.1099707,33.2903226 L8.89002933,33.2903226 C8.1837869,33.2903226 7.62903226,32.7390482 7.62903226,32.0372364 L7.62903226,1.25308617 C7.62903226,0.551274376 8.1837869,0 8.89002933,0 L34.1099707,0 C34.8162131,0 35.3709677,0.551274376 35.3709677,1.25308617 Z"
              fill={active ? '#F7F0EB' : '#DDDCDC'}
            />
            <path
              d="M35.3709677,1.25308617 L35.3709677,32.0372364 C35.3709677,32.7390482 34.7884754,33.2903226 34.0469208,33.2903226 L20.8064516,33.2903226 L20.8064516,0 L34.0469208,0 C34.7884754,0 35.3709677,0.551274376 35.3709677,1.25308617 Z"
              fill={active ? '#EFE2DD' : '#DDDCDC'}
            />
            <g transform="translate(13.177419, 8.322581)" fill={active ? '#E1D3CE' : '#BFBFBF'}>
              <path d="M18.0322581,1.17903226 C18.0322581,1.83936892 17.4656158,2.35806452 16.7442396,2.35806452 L1.28801843,2.35806452 C0.566642243,2.35806452 0,1.83936892 0,1.17903226 C0,0.518695591 0.566642243,0 1.28801843,0 L16.7442396,0 C17.4656158,0 18.0322581,0.518695591 18.0322581,1.17903226 Z" />
              <path d="M18.0322581,5.89516129 C18.0322581,6.55549796 17.4656158,7.07419355 16.7442396,7.07419355 L1.28801843,7.07419355 C0.566642243,7.07419355 0,6.55549796 0,5.89516129 C0,5.23482462 0.566642243,4.71612903 1.28801843,4.71612903 L16.7442396,4.71612903 C17.4656158,4.71612903 18.0322581,5.23482462 18.0322581,5.89516129 Z" />
              <path d="M10.3041475,10.6112903 C10.3041475,11.271627 9.73750522,11.7903226 9.01612903,11.7903226 L1.28801843,11.7903226 C0.566642243,11.7903226 0,11.271627 0,10.6112903 C0,9.95095366 0.566642243,9.43225806 1.28801843,9.43225806 L9.01612903,9.43225806 C9.73750522,9.43225806 10.3041475,9.95095366 10.3041475,10.6112903 Z" />
            </g>
            <g transform="translate(21.500000, 8.322581)" fill={active ? '#CDBFBA' : '#9B9B9B'}>
              <path d="M0,11.7903226 L0,9.43225806 C0.776866667,9.43225806 1.38709677,9.95095366 1.38709677,10.6112903 C1.38709677,11.271627 0.776866667,11.7903226 0,11.7903226 Z" />
              <path d="M8.32258065,7.07419355 L0,7.07419355 L0,4.71612903 L8.32258065,4.71612903 C9.09944731,4.71612903 9.70967742,5.23482462 9.70967742,5.89516129 C9.70967742,6.55549796 9.09944731,7.07419355 8.32258065,7.07419355 Z" />
              <path d="M8.32258065,2.35806452 L0,2.35806452 L0,0 L8.32258065,0 C9.09944731,0 9.70967742,0.518695591 9.70967742,1.17903226 C9.70967742,1.83936892 9.09944731,2.35806452 8.32258065,2.35806452 Z" />
            </g>
            <path
              d="M42.5464844,15.8550219 C42.5212891,15.8550219 41.7402344,15.2580645 41.7402344,15.2580645 L39.6489395,16.8002044 L22.2558594,29.6099975 C22.0291855,29.7839442 21.7519531,29.883603 21.5,29.883603 C21.2480469,29.883603 20.9708145,29.7840271 20.7441406,29.6099975 L3.35106055,16.8002044 L1.25976562,15.2580645 C1.25976562,15.2580645 0.478710937,15.8550219 0.453515625,15.8550219 C0.176367187,16.0789638 0,16.4270231 0,16.8002044 L0,39.2690164 C0,41.3335769 1.68800195,43 3.77929688,43 L39.2207031,43 C41.311998,43 43,41.3335769 43,39.2690164 L43,16.8002044 C43,16.4270231 42.8236328,16.0789638 42.5464844,15.8550219 Z"
              fill={active ? '#69D5B1' : '#BFBFBF'}
            />
            <path
              d="M43,16.8002044 L43,39.2690164 C43,41.3335769 41.2575464,43 39.0987903,43 L20.8064516,43 L20.8064516,29.88352 C21.0664456,29.88352 21.3527077,29.7839442 21.5866935,29.6099146 L39.5408407,16.8002044 L41.6995968,15.2580645 C41.6995968,15.2580645 42.5058468,15.8550219 42.5318548,15.8550219 C42.8179435,16.0789638 43,16.4270231 43,16.8002044 Z"
              fill={active ? '#179A6F' : '#9B9B9B'}
            />
          </g>
        </g>
      </g>
    </Icon>
  );
}
