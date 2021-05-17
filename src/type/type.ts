enum Type{
    NOMAL,
    FIRE
}

namespace Type{
    export function getType(type:Type){
        switch (type) {
            case Type.NOMAL:
                return 'normal';
            case Type.FIRE:
                return 'fire';
            default:
                return '詳細不明';
        }
    }
}
