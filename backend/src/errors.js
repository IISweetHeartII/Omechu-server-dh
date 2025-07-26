export class NoEmailOrPasswd extends Error {
  errorCode = "C001";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class InCorrectPasswd extends Error {
  errorCode = "C002";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class SessionNotFoundError extends Error {
  errorCode = "S001";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class LoginRequiredError extends Error {
  errorCode = "C003";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class NoReviewData extends Error {
  errorCode = "C003";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class SessionDestroyError extends Error {
  errorCode = "S001";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class UserUpdateFailedError extends Error {
  errorCode = "C003";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class NoUserData extends Error {
  errorCode = "C003";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class SessionRegenerateError extends Error {
  errorCode = "S001";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class NoRestData extends Error {
  errorCode = "C004";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class NoImageUrl extends Error {
  errorCode = "C004";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class FailToAddReview extends Error {
  errorCode = "C004";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class FailToChangeLike extends Error {
  errorCode = "C005";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class NoInCorrectParmas extends Error {
  errorCode = "C006";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class NoInCorrectData extends Error {
  errorCode = "C007";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

// ============== 🆕 마이페이지 관련 새로운 에러들 ==============

export class NoProfileData extends Error {
  errorCode = "M001";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class ProfileUpdateFailed extends Error {
  errorCode = "M002";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class NoRestaurantPermission extends Error {
  errorCode = "M003";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class AlreadyZzimmed extends Error {
  errorCode = "M004";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class NoZzimData extends Error {
  errorCode = "M005";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class InvalidProfileData extends Error {
  errorCode = "M006";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class InvalidOrExpiredTokenError extends Error {
  errorCode = "E001";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class UserNotFoundError extends Error {
  errorCode = "E002";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class FailToAddRest extends Error {
  errorCode = "C006";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}
export class DuplicatedRest extends Error {
  errorCode = "C006";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}
export class WrongAddress extends Error {
  errorCode = "C007";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}
export class FailToAddRepreMenu extends Error {
  errorCode = "C009";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class NotYourRest extends Error {
  errorCode = "C010";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class FailToUpdateRestData extends Error {
  errorCode = "C011";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class InvalidVerificationCodeError extends Error {
  errorCode = "V001";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class VerificationCodeExpiredError extends Error {
  errorCode = "V002";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class NoParams extends Error {
  errorCode = "P001";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class FailToReportReview extends Error {
  errorCode = "C006";
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}
