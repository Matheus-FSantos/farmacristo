import { API_INSTANCE } from "./config/Axios.api";

export class CurriculumService {
	
	private getAuthorization(loginUsername: string, loginPassword: string): IAuthorizationParams {
		return { username: loginUsername, password: loginPassword };
	}

	public async findAll(login: ILoginDTO): Promise<ICurriculumDTO[]> {
		return await API_INSTANCE.get("/resumes", {
				auth: this.getAuthorization(login.email, login.password)
			}).then((data) => data.data).catch((error) => { throw new Error(error.response.data.description) });
	}

	public async findCurriculumCvById(loginUsername: string, loginPassword: string, curriculumId: string) {
		try {
			const response = await API_INSTANCE.get(`/resumes/download/${ curriculumId }`, {
				auth: this.getAuthorization(loginUsername, loginPassword),
				responseType: "arraybuffer",
			});
	
			if(response.status === 200) {
				const blob = new Blob([response.data], { type: response.headers["application/pdf"] });
				const imageUrl = URL.createObjectURL(blob);
				return imageUrl;
			} else {
				return "";
			}
		} catch (error) {
			throw error;
		}
	}

	public async save(newCurriculumDTO: INewCurriculumDTO): Promise<string> {
		return await API_INSTANCE.post("/resumes", newCurriculumDTO).then((data) => data.data).catch(error => {
			throw new Error(error.response.data.messages[0]);
		});
	}

	public async updateCurriculumCV(curriculumId: string, formData: FormData) {
		return await API_INSTANCE.put(`/resumes/cv/${ curriculumId }`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			}
		}).then(() => "Atualizado!").catch((error) => error)
	}

	public async delete(loginUsername: string, loginPassword: string, curriculumId: string) {
		return await API_INSTANCE.delete(`/resumes/${ curriculumId }`, {
			auth: this.getAuthorization(loginUsername, loginPassword),
		}).then(() => "Curriculo Deletado!")
			.catch((error) => {
				throw new Error(error);
			});
	}

}
