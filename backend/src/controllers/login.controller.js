import { StatusCodes } from "http-status-codes";
import { findUser } from "../services/login.service.js";
export const handleUserLogin = async (req, res) => {
  const loginUser = await findUser(req.body);
  if (loginUser) {
    req.session.user = {
      id: loginUser.id.toString(),
      email: loginUser.email,
    };
  }

  res.status(StatusCodes.OK);
  res.success({
    id: loginUser.id.toString(),
    email: loginUser.email,
    gender: loginUser.gender,
    nickname: loginUser.nickname,
    created_at: loginUser.created_at,
    updated_at: loginUser.updated_at,
  });
  console.log(req.session);
  console.log(req.headers.cookie);
  console.log(req.session);
  /*
  #swagger.tags= ["Auth"]
  #swagger.summary= "로그인"
  #swagger.description= "로그인 API입니다. 이메일과 비밀번호를 포함해서 요청해야합니다",
  #swagger.requestBody = {
  required: true,
  content: {
    'application/json': {
      schema: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
          email: { type: 'string', example: 'email@email.com' },
          password: { type: 'string', example: 'password' }
        }
      }
    }
  }
}
  #swagger.responses[200] = {
    description: "로그인 성공",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { 
              type: "string", 
              example: "SUCCESS" 
            },
            error: { 
              type: "object", 
              example: null 
            },
            success: {
              type: "object",
              properties: {
                id: { type: "string",example:"1" },
                email: { type: "string",example:"email@email.com" },
                gender: { type: "string",example:"남성" },
                nickname: { type: "string",example:"오메추" },
                created_at: { type: "string",example: '2023-01-01T00:00:00.000Z' },
                updated_at: { type: "string",example: '2023-01-01T00:00:00.000Z' }
              }
            }
          }
        }
      }
    }
  }
  #swagger.responses[400] = {
  description: "올바른 파라미터를 받지 못했을 때",
  content: {
    'application/json': {
      schema: {
        type: "object",
        properties: {
          resultType: { type: "string", example: "FAIL" },
          error: {
            type: "object",
            properties: {
              errorCode: { type: "string" },
              reason: {
                type: "string",
                example: "이메일 이나 비밀번호가 입력되지 않았습니다"
              },
              data: { 
                type: "object",
                properties:{
                  email:{type:"string",example:"email@email.com"}
              } }
            }
          },
          success: { type: "string", example: null }
        }
      }
    }
  }
}
#swagger.responses[401] = {
  description: "비밀번호 틀렸을 때",
  content: {
    'application/json': {
      schema: {
        type: "object",
        properties: {
          resultType: { type: "string", example: "FAIL" },
          error: {
            type: "object",
            properties: {
              errorCode: { type: "string" },
              reason: {
                type: "string",
                example: "비밀번호가 틀렸습니다"
              },
              data: {
                type: "object",
                properties: {
                  password:{type:"string",example: "user1234"}
                }
              }
            }
          },
          success: { type: "string", example: null }
        }
      }
    }
  }
}
#swagger.responses[500] = {
  description: "서버에서 오류났을 때",
  content: {
    'application/json': {
      schema: {
        type: "object",
        properties: {
          resultType: { type: "string", example: "FAIL" },
          error: {
            type: "object",
            properties: {
              errorCode: { type: "string", example:"SERVER_ERROR" },
              reason: {
                type: "string",
                example: "서버 오류"
              },
              data: { 
                type: "object",
                properties: {
                  email: { type: "string" , example: "email@email.com"},
                  password: { type: "string" , example: "user1234" }
                  }
              }
            }
          },
          success: { type: "string", example: null }
        }
      }
    }
  }
}
  */
};
