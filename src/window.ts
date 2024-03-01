/* eslint-disable solid/reactivity */
import { sendRequest, getCookie, setCookie} from '@/utils/index'
type BotProps = {
    chatflowid: string
    includeQuestions: boolean
    loadID?: string,
    userID?: string,
    defaultOpenDesktop?:boolean,
    defaultOpenMobile?:boolean,
    delayOpenFlag?: boolean, 
    delayOpenSeconds?:number,
    apiHost?: string
    chatflowConfig?: Record<string, unknown>
    theme?:Record<string, unknown>
}

export const initFull = (props: BotProps & { id?: string }) => {

    const data = sendRequest<any>({
        method: 'GET',
        url: `https://vshdvtqafk.execute-api.us-east-2.amazonaws.com/default/user_config_api/?username=`+props.userID,
    }).then((response) => {response.data
        const config_data = JSON.parse(response.data?.body)
        props.theme = config_data?.theme;
        props.chatflowid = config_data?.chatflowid;
        props.apiHost = config_data?.apiHost;
        props.includeQuestions = config_data?.includeQuestions;
        props.defaultOpenDesktop = config_data?.defaultOpenDesktop
        props.defaultOpenMobile = config_data?.defaultOpenMobile
        props.delayOpenSeconds = config_data?.delayOpenSeconds
        props.delayOpenFlag = config_data?.delayOpenFlag
        props.loadID = config_data?.load_id ? config_data?.load_id :""
        const fullElement = props.id
        ? document.getElementById(props.id)
        : document.querySelector('flowise-fullchatbot-parent')

        if (!fullElement) throw new Error('<flowise-fullchatbot> element not found.')
        const element = document.createElement('flowise-fullchatbot')
        Object.assign(element, props)
        fullElement.appendChild(element)
    
    });
}


export const init = async (props: BotProps) => {
    // const numLoadedCookie: string =  getCookie("numLoadedChat");
    // let numLoaded: number  = parseInt(numLoadedCookie);
    // numLoaded = numLoaded ? numLoaded : 0; 
    // setCookie("numLoadedChat",numLoaded + 1,1)
    const data = sendRequest<any>({
        method: 'GET',
        url: `https://vshdvtqafk.execute-api.us-east-2.amazonaws.com/default/user_config_api/?username=`+props.userID,
    }).then((response) => {
        const config_data = JSON.parse(response.data.body)
        props.theme = config_data?.theme;
        props.chatflowid = config_data?.chatflowid;
        props.apiHost = config_data?.apiHost;
        props.includeQuestions = config_data?.includeQuestions;
        // props.isOpen = window?.innerWidth ? (window?.innerWidth > 1000): false;

        props.defaultOpenDesktop = config_data?.defaultOpenDesktop
        props.defaultOpenMobile = config_data?.defaultOpenMobile
        props.delayOpenSeconds = config_data?.delayOpenSeconds
        props.delayOpenFlag = config_data?.delayOpenFlag
        props.loadID = config_data?.load_id ? config_data?.load_id :""

        // props.isOpen = props.isOpen || default_open
        const element = document.createElement('flowise-chatbot')
        Object.assign(element, props)
        document.body.appendChild(element)
        
    
    });
    // TODO: need to add error checking and handling 
}

type Chatbot = {
    initFull: typeof initFull
    init: typeof init
}

declare const window:
    | {
          Chatbot: Chatbot | undefined
          innerWidth: number
      }
    | undefined

export const parseChatbot = () => ({
    initFull,
    init
})

export const injectChatbotInWindow = (bot: Chatbot) => {
    if (typeof window === 'undefined') return
    window.Chatbot = { ...bot }
}
