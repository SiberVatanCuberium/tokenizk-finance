import { Field } from 'snarkyjs';


export const STANDARD_TREE_INIT_ROOT_20 = Field(
    '19489292394622142448727235211662807700126173086870669586237893953121074753278'
);

export const STANDARD_TREE_INIT_ROOT_299 = Field(
    '19489292394622142448727235211662807700126173086870669586237893953121074753278'
);

export const STANDARD_TREE_INIT_ROOT_12 = Field(
    '3136367688481366987314253891173247447839122679172869317967104414474412425595'
);

export const STANDARD_TREE_INIT_ROOT_8 = Field(
    '21614416876217972474084851109688329000791937035724439964738173004620435920527'
);

export const STANDARD_TREE_INIT_ROOT_4 = Field(
    '20468198949394563802460512965219839480612000520504690501918527632215047268421'
);

export const STANDARD_TREE_INIT_ROOT_2 = Field(
    '2447983280988565496525732146838829227220882878955914181821218085513143393976'
);

export const INDEX_TREE_INIT_ROOT_20 = Field(
    '4453683906705534602279746840423599768942420586080209850915533643426663961504'
);

export const INDEX_TREE_INIT_ROOT_16 = Field(
    '2587622968086351834920795419699157755465418343790213876816769105569975661411'
);

export const INDEX_TREE_INIT_ROOT_12 = Field(
    '14831689317254496330184679263221265018102186744215812307622761563914735917045'
);

export const INDEX_TREE_INIT_ROOT_8 = Field(
    '18400496877556421507086795686863662861698806062576291669975152826153540883262'
);

export const INDEX_TREE_INIT_ROOT_4 = Field(
    '27147724320604201670658411827837111847130547635668360183548907933912690214783'
);

export const INDEX_TREE_INIT_ROOT_2 = Field(
    '11424064169442499656248270967957466020056181284936027899258689782550997266764'
);


// unitfield config
const TREE_HEIGHT = 4;
const STANDARD_TREE_ROOT = STANDARD_TREE_INIT_ROOT_4;
const INDEX_TREE_ROOT = INDEX_TREE_INIT_ROOT_4;

export const DATA_TREE_HEIGHT = TREE_HEIGHT;
export const DATA_TREE_INIT_ROOT = STANDARD_TREE_ROOT;

export const ROOT_TREE_HEIGHT = TREE_HEIGHT;
export const ROOT_TREE_INIT_ROOT = STANDARD_TREE_ROOT;

export const USER_NULLIFIER_TREE_HEIGHT = 2;
export const USER_NULLIFIER_TREE_INIT_ROOT = INDEX_TREE_INIT_ROOT_2;

export const FEE_ASSET_ID_SUPPORT_NUM = 2;

export const MINA = 1000_000_000;
