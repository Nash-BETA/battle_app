enum Type{
    NOMAL,
    FIRE,
    GRASS,
    WATER
}

namespace Type{
    export function getType(type:Type){
        switch (type) {
            case Type.NOMAL:
                return 'normal';
            case Type.FIRE:
                return 'fire';
            case Type.GRASS:
                return 'grass';
            case Type.WATER:
                return 'water';
            default:
                return '詳細不明';
        }
    }
}
export {
    Type,
}